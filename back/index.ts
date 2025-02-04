import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import multer from 'multer'

const app = express()
const port = 5001

// CORS 허용
app.use(cors())
// JSON 형식 데이터 파싱
app.use(express.json())

// 이미지 업로드를 위한 설정 (업로드할 파일 저장 경로와 파일명 설정)
const upload = multer({
    dest: 'uploads/', // 저장할 폴더
    limits: { fileSize: 10 * 1024 * 1024 }, // 파일 크기 제한 (10MB)
})

// 업로드된 파일을 클라이언트가 접근할 수 있도록 정적 파일 서빙
app.use('/uploads', express.static('uploads'))

// API: /api/hello
app.get('/api/hello', (req: Request, res: Response): void => {
    res.json({ message: 'Hello from the backend!' })
})

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
