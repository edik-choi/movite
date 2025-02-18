import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import multer from 'multer'
import axios from 'axios'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

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

const ADMIN_ID = 'edikchoi'
const ADMIN_PASSWORD = 'anstn9231'
const SECRET_KEY = 'super_secret_key' // 🔹 JWT 서명용 키 (보안 강화를 위해 .env 파일에서 관리 추천)

// 관리자 인증 미들웨어
const verifyAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const token = req.headers.authorization?.split(' ')[1] // "Bearer token"에서 토큰만 추출

    if (!token) {
        res.status(401).json({ message: '관리자 인증 필요' })
        return
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { role: string }

        if (decoded.role !== 'admin') {
            res.status(403).json({ message: '권한이 없습니다.' })
            return
        }

        next() // 인증 성공 시 다음 미들웨어로 이동
    } catch (error) {
        res.status(401).json({ message: '토큰이 유효하지 않습니다.' })
    }
}

dotenv.config()

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET
const NAVER_REDIRECT_URI = process.env.NAVER_REDIRECT_URI

// 이미지 업로드를 위한 설정 (업로드할 파일 저장 경로와 파일명 설정)
const upload = multer({
    dest: 'uploads/', // 저장할 폴더
    limits: { fileSize: 10 * 1024 * 1024 }, // 파일 크기 제한 (10MB)
})

// 관리자 전체 데이터 조회 엔드포인트
app.get(
    '/api/admin/data',
    verifyAdmin,
    async (req: Request, res: Response): Promise<void> => {
        try {
            const dbFilePath = path.join(process.cwd(), 'db.js')

            if (!fs.existsSync(dbFilePath)) {
                res.json([])
                return
            }

            const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
            const jsonStr = fileContent
                .replace(/^module\.exports\s*=\s*/, '')
                .replace(/;$/, '')
            const data = JSON.parse(jsonStr)

            res.json(data) // ✅ 모든 사용자 데이터 반환
        } catch (error) {
            console.error('데이터 조회 오류:', error)
            res.status(500).json({ message: '서버 오류 발생' })
        }
    }
)

// 관리자 로그인 엔드포인트
app.post('/api/admin/login', (req: Request, res: Response) => {
    const { id, password } = req.body

    if (id === ADMIN_ID && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, SECRET_KEY, {
            expiresIn: '1h',
        }) // 1시간 유효한 JWT 발급
        res.json({ token })
    } else {
        res.status(401).json({
            message: '아이디 또는 비밀번호가 잘못되었습니다.',
        })
    }
})

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

// 업로드 파일 정적 제공
app.use('/uploads', express.static('uploads'))

// 이미지 업로드
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

// 이미지 삭제
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
        const { userId, data } = req.body // 🔹 userId 추가
        if (!userId) {
            res.status(400).json({
                status: 'error',
                message: 'userId가 필요합니다.',
            })
            return
        }

        const payload = Array.isArray(data) ? data : [data]

        const dbFilePath = path.join(process.cwd(), 'db.js')
        let existingData: any[] = []

        if (fs.existsSync(dbFilePath)) {
            const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
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

        // 🔹 각 데이터에 userId 추가하여 저장
        const newData = payload.map((item) => ({ ...item, userId }))

        const updatedData = existingData.concat(newData)

        fs.writeFileSync(
            dbFilePath,
            'module.exports = ' + JSON.stringify(updatedData, null, 2) + ';',
            'utf-8'
        )

        res.json({ status: 'success', message: '성공적으로 저장되었습니다' })
    } catch (error) {
        console.error('저장 중 오류 발생:', error)
        res.status(500).json({
            status: 'error',
            message: '서버 오류가 발생했습니다',
        })
    }
})

// db.js 데이터 로드(id)
app.get('/api/data/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const dbFilePath = path.join(process.cwd(), 'db.js')

        if (!fs.existsSync(dbFilePath)) {
            res.status(404).json({ message: '데이터가 존재하지 않습니다.' })
            return
        }

        const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
        const jsonStr = fileContent
            .replace(/^module\.exports\s*=\s*/, '')
            .replace(/;$/, '')
        const data = JSON.parse(jsonStr)

        // 🔹 ID에 해당하는 데이터 찾기
        const item = data.find((item: any) => item.id === id)

        if (!item) {
            res.status(404).json({
                message: `ID ${id}에 해당하는 데이터를 찾을 수 없습니다.`,
            })
            return
        }

        res.json(item) // ✅ 해당 ID의 데이터 반환
    } catch (error) {
        console.error('데이터 조회 오류:', error)
        res.status(500).json({ message: '서버 오류 발생' })
    }
})

// db.js 데이터 로드(mypage)
app.get('/api/mypage/data/:userId', (req: Request, res: Response): void => {
    try {
        const { userId } = req.params
        const dbFilePath = path.join(process.cwd(), 'db.js')

        if (!fs.existsSync(dbFilePath)) {
            res.json([])
            return
        }

        const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
        const jsonStr = fileContent
            .replace(/^module\.exports\s*=\s*/, '')
            .replace(/;$/, '')
        const data = JSON.parse(jsonStr)

        // 🔹 userId가 일치하는 데이터만 반환
        const userData = data.filter((item: any) => item.userId === userId)

        res.json(userData)
    } catch (error) {
        console.error('데이터 조회 중 오류 발생:', error)
        res.status(500).json({ error: '데이터 조회 오류' })
    }
})

// db.js 데이터 수정 로드(editId)
app.get('/api/edit/data/:editId', (req: Request, res: Response): void => {
    try {
        const { editId } = req.params
        const dbFilePath = path.join(process.cwd(), 'db.js')

        if (!fs.existsSync(dbFilePath)) {
            res.json([])
            return
        }

        const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
        const jsonStr = fileContent
            .replace(/^module\.exports\s*=\s*/, '')
            .replace(/;$/, '')
        const data = JSON.parse(jsonStr)

        // 🔹 editId가 일치하는 데이터만 반환
        const userData = data.filter((item: any) => item.editId === editId)

        res.json(userData)
    } catch (error) {
        console.error('데이터 조회 중 오류 발생:', error)
        res.status(500).json({ error: '데이터 조회 오류' })
    }
})

// db.js 데이터 수정 저장(eidtId)
app.put(
    '/api/edit/data/:editId',
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { editId } = req.params
            const { userId, data } = req.body
            const dbFilePath = path.join(process.cwd(), 'db.js')

            if (!fs.existsSync(dbFilePath)) {
                res.status(404).json({ message: '데이터 파일이 없습니다.' })
                return
            }

            const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
            const jsonStr = fileContent
                .replace(/^module\.exports\s*=\s*/, '')
                .replace(/;$/, '')
            let dbData = JSON.parse(jsonStr)

            // ✅ 해당 editId의 데이터 찾기
            const itemIndex = dbData.findIndex(
                (item: any) => item.editId === editId && item.userId === userId
            )

            if (itemIndex === -1) {
                res.status(404).json({
                    message: '해당 데이터를 찾을 수 없습니다.',
                })
                return
            }

            // ✅ 기존 데이터를 새로운 데이터로 업데이트
            dbData[itemIndex] = { ...dbData[itemIndex], ...data }

            // ✅ 변경된 데이터 저장
            fs.writeFileSync(
                dbFilePath,
                'module.exports = ' + JSON.stringify(dbData, null, 2) + ';',
                'utf-8'
            )

            res.json({ message: `ID ${editId} 데이터가 업데이트되었습니다.` })
        } catch (error) {
            console.error('데이터 업데이트 오류:', error)
            res.status(500).json({ message: '서버 오류 발생' })
        }
    }
)

// db.js 확정 처리
app.put(
    '/api/data/:userId/:id',
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { userId, id } = req.params
            const { isFinalized } = req.body
            const dbFilePath = path.join(process.cwd(), 'db.js')

            if (!fs.existsSync(dbFilePath)) {
                res.status(404).json({ message: '데이터 파일이 없습니다.' })
                return
            }

            const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
            const jsonStr = fileContent
                .replace(/^module\.exports\s*=\s*/, '')
                .replace(/;$/, '')
            let data = JSON.parse(jsonStr)

            // ✅ 해당 userId와 id에 맞는 데이터 찾기
            const itemIndex = data.findIndex(
                (item: any) => item.userId === userId && item.id === id
            )

            if (itemIndex === -1) {
                res.status(404).json({
                    message: '해당 데이터를 찾을 수 없습니다.',
                })
                return
            }

            // ✅ `isFinalized` 값 업데이트
            data[itemIndex].isFinalized = isFinalized

            // ✅ 변경된 데이터를 다시 저장
            fs.writeFileSync(
                dbFilePath,
                'module.exports = ' + JSON.stringify(data, null, 2) + ';',
                'utf-8'
            )

            res.json({ message: `ID ${id} 데이터가 업데이트되었습니다.` })
        } catch (error) {
            console.error('데이터 업데이트 오류:', error)
            res.status(500).json({ message: '서버 오류 발생' })
        }
    }
)

// db.js 데이터 삭제(mypage)
app.delete('/api/data/:userId/:id', (req: Request, res: Response): void => {
    try {
        const { userId, id } = req.params
        const dbFilePath = path.join(process.cwd(), 'db.js')

        if (!fs.existsSync(dbFilePath)) {
            res.status(404).json({
                status: 'error',
                message: '데이터 파일이 없습니다.',
            })
            return
        }

        const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
        const jsonStr = fileContent
            .replace(/^module\.exports\s*=\s*/, '')
            .replace(/;$/, '')
        let data = JSON.parse(jsonStr)

        // 🔹 userId와 id가 일치하는 데이터만 삭제
        const newData = data.filter(
            (item: any) => !(item.userId === userId && item.id === id)
        )

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

// db.js 데이터 삭제(admin)
app.delete(
    '/api/admin/data/:id',
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params
            const token = req.headers.authorization?.split(' ')[1]

            if (!token) {
                res.status(401).json({ message: '관리자 인증 필요' })
                return
            }

            try {
                const decoded = jwt.verify(token, SECRET_KEY) as {
                    role: string
                }
                if (decoded.role !== 'admin') {
                    res.status(403).json({ message: '권한이 없습니다.' })
                    return
                }
            } catch (error) {
                res.status(401).json({ message: '토큰이 유효하지 않습니다.' })
                return
            }

            const dbFilePath = path.join(process.cwd(), 'db.js')

            if (!fs.existsSync(dbFilePath)) {
                res.status(404).json({ message: '데이터 파일이 없습니다.' })
                return
            }

            const fileContent = fs.readFileSync(dbFilePath, 'utf-8')
            const jsonStr = fileContent
                .replace(/^module\.exports\s*=\s*/, '')
                .replace(/;$/, '')
            let data = JSON.parse(jsonStr)

            // 🔹 ID에 해당하는 데이터 삭제
            const newData = data.filter((item: any) => item.id !== id)
            fs.writeFileSync(
                dbFilePath,
                'module.exports = ' + JSON.stringify(newData, null, 2) + ';',
                'utf-8'
            )

            res.json({ message: `ID ${id} 데이터 삭제 완료` })
        } catch (error) {
            console.error('데이터 삭제 오류:', error)
            res.status(500).json({ message: '서버 오류 발생' })
        }
    }
)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
