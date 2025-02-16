import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import multer from 'multer'
import axios from 'axios'
import dotenv from 'dotenv'

const app = express()
const port = 5001

// CORS 허용
app.use(
    cors({
        origin: 'http://localhost:3000', // ✅ 허용할 프론트엔드 URL
        credentials: true, // ✅ 쿠키, 인증 정보 허용
    })
)
// JSON 형식 데이터 파싱
app.use(express.json())

dotenv.config()

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET
const NAVER_REDIRECT_URI = process.env.NAVER_REDIRECT_URI

// 네이버 로그인 URL 생성
app.get('/auth/naver', (req: Request, res: Response) => {
    const state = Math.random().toString(36).substring(7) // CSRF 방지를 위한 랜덤 값
    const loginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${state}&redirect_uri=${NAVER_REDIRECT_URI}`

    res.json({ url: loginUrl }) // 클라이언트에서 이 URL로 리디렉트
})

// 네이버 로그인 콜백
app.get(
    '/auth/naver/callback',
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { code, state } = req.query

            if (!code || !state) {
                res.status(400).json({ error: '잘못된 요청입니다.' })
                return
            }

            const tokenResponse = await axios.post(
                'https://nid.naver.com/oauth2.0/token',
                null,
                {
                    params: {
                        grant_type: 'authorization_code',
                        client_id: NAVER_CLIENT_ID,
                        client_secret: NAVER_CLIENT_SECRET,
                        code,
                        state,
                    },
                }
            )

            const { access_token } = tokenResponse.data

            const userResponse = await axios.get(
                'https://openapi.naver.com/v1/nid/me',
                {
                    headers: { Authorization: `Bearer ${access_token}` },
                }
            )

            const userData = userResponse.data.response

            // ✅ 성공 시 프론트엔드로 리디렉트
            res.redirect(
                `http://localhost:3000/auth/naver/callback?user=${encodeURIComponent(
                    JSON.stringify(userData)
                )}`
            )
            return // 🚀 명시적으로 함수 종료
        } catch (error) {
            console.error('네이버 로그인 실패:', error)

            // ✅ 실패 시 프론트엔드 로그인 페이지로 이동
            res.redirect('http://localhost:3000/login?error=naver_login_failed')
            return // 🚀 명시적으로 함수 종료
        }
    }
)

// 이미지 업로드를 위한 설정 (업로드할 파일 저장 경로와 파일명 설정)
const upload = multer({
    dest: 'uploads/', // 저장할 폴더
    limits: { fileSize: 10 * 1024 * 1024 }, // 파일 크기 제한 (10MB)
})

// 업로드된 파일을 클라이언트가 접근할 수 있도록 정적 파일 서빙
app.use('/uploads', express.static('uploads'))

// API: /api/upload - 이미지 업로드 처리
app.post(
    '/api/upload',
    upload.single('image'),
    (req: Request, res: Response) => {
        if (!req.file) {
            res.status(400).json({
                status: 'error',
                message: '파일이 업로드되지 않았습니다.',
            })
            return
        }

        // 업로드된 파일의 URL 반환
        const imageUrl = `/uploads/${req.file.filename}`

        res.json({
            status: 'success',
            imageUrl: imageUrl, // 클라이언트에서 사용할 이미지 URL
        })
    }
)

app.delete('/api/upload/:filename', (req: Request, res: Response): void => {
    try {
        const filename = req.params.filename
        const filePath = path.join(process.cwd(), 'uploads', filename)

        // 파일이 존재하는지 확인
        if (!fs.existsSync(filePath)) {
            res.status(404).json({
                status: 'error',
                message: '파일을 찾을 수 없습니다.',
            })
            return
        }

        // 파일 삭제
        fs.unlinkSync(filePath)

        res.json({
            status: 'success',
            message: '이미지가 성공적으로 삭제되었습니다.',
        })
    } catch (error) {
        console.error('이미지 삭제 중 오류 발생:', error)
        res.status(500).json({
            status: 'error',
            message: '서버에서 이미지 삭제 중 오류가 발생했습니다.',
        })
    }
})

// db.js 데이터 저장
app.post('/api/save', (req: Request, res: Response): void => {
    try {
        // 요청 본문 전체를 확인 (배열 또는 객체일 수 있음)
        console.log('요청 본문:', req.body)
        // req.body가 배열이 아니면 배열로 감싸서 처리
        const payload = Array.isArray(req.body) ? req.body : [req.body]

        // 서버 현재 경로에 있는 db.js 파일 경로 설정
        const dbFilePath = path.join(process.cwd(), 'db.js')
        let existingData: any[] = []

        // db.js 파일이 존재하면 읽어서 기존 데이터를 가져옵니다.
        if (fs.existsSync(dbFilePath)) {
            const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
            // db.js 파일은 "module.exports = ..." 형식이므로 앞부분과 마지막 세미콜론을 제거합니다.
            const jsonStr = fileContent
                .replace(/^module\.exports\s*=\s*/, '')
                .replace(/;$/, '')
            try {
                existingData = JSON.parse(jsonStr)
            } catch (parseError) {
                console.error('db.js 파싱 오류:', parseError)
                existingData = []
            }
        }

        // 새 데이터를 기존 데이터와 병합
        const updatedData = existingData.concat(payload)

        // 병합한 데이터를 다시 db.js 파일에 저장 (module.exports = ...; 형식)
        const fileData =
            'module.exports = ' + JSON.stringify(updatedData, null, 2) + ';'
        fs.writeFileSync(dbFilePath, fileData, 'utf-8')

        console.log('저장된 데이터:', updatedData)
        res.json({
            status: 'success',
            message: '성공적으로 저장되었습니다',
        })
    } catch (error) {
        console.error('저장 중 오류 발생:', error)
        res.status(500).json({
            status: 'error',
            message: '서버 오류가 발생했습니다',
        })
    }
})

// db.js 데이터 로드
app.get('/api/data', (req: Request, res: Response): void => {
    try {
        // db.js 파일 경로 설정
        const dbFilePath = path.join(process.cwd(), 'db.js')
        if (fs.existsSync(dbFilePath)) {
            const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
            // 파일 내용은 "module.exports = [...] ;" 형식이므로 앞부분과 마지막 세미콜론을 제거합니다.
            const jsonStr = fileContent
                .replace(/^module\.exports\s*=\s*/, '')
                .replace(/;$/, '')
            const data = JSON.parse(jsonStr)
            res.json(data)
        } else {
            // 파일이 없으면 빈 배열 반환
            res.json([])
        }
    } catch (error) {
        console.error('db.js 파일 읽기 중 오류 발생:', error)
        res.status(500).json({ error: 'db.js 파일 읽기 오류' })
    }
})

app.delete('/api/data/:id', (req: Request, res: Response): void => {
    try {
        const id = req.params.id
        const dbFilePath = path.join(process.cwd(), 'db.js')

        if (!fs.existsSync(dbFilePath)) {
            res.status(404).json({
                status: 'error',
                message: '데이터 파일이 없습니다.',
            })
        }

        const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
        const jsonStr = fileContent
            .replace(/^module\.exports\s*=\s*/, '')
            .replace(/;$/, '')
        let data = JSON.parse(jsonStr)

        const newData = data.filter((item: any) => item.id !== id)
        fs.writeFileSync(
            dbFilePath,
            'module.exports = ' + JSON.stringify(newData, null, 2) + ';',
            'utf-8'
        )

        res.json({ status: 'success', message: '데이터 삭제 완료' })
    } catch (error) {
        res.status(500).json({ status: 'error', message: '서버 오류 발생' })
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
