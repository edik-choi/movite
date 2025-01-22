import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import path from 'path'
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

// API: /api/save
app.post('/api/save', (req: Request, res: Response): void => {
    try {
        const { maleName, selectedFontIndex, selectedThemeColorIndex } = req.body
        console.log('저장된 데이터:', maleName, selectedFontIndex, selectedThemeColorIndex)

        // 여기에 실제 데이터베이스 저장 로직이 들어갈 수 있습니다

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

// API: /api/upload - 이미지 업로드 처리
app.post('/api/upload', upload.single('image'), (req: Request, res: Response) => {
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
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
