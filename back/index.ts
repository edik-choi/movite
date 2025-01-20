import express from 'express'
import cors from 'cors'

const app = express()
const port = 5001

app.use(cors()) // CORS 허용
app.use(express.json()) // JSON 형식 데이터 파싱

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' })
})

app.post('/api/save', (req, res) => {
    try {
        const { maleName, selectedFontIndex, selectedThemeColorIndex } = req.body
        console.log('저장된 데이터:', maleName, selectedFontIndex, selectedThemeColorIndex)
        
        // 여기에 실제 데이터베이스 저장 로직이 들어갈 수 있습니다
        
        res.json({ 
            status: 'success', 
            message: '성공적으로 저장되었습니다' 
        })
    } catch (error) {
        console.error('저장 중 오류 발생:', error)
        res.status(500).json({ 
            status: 'error', 
            message: '서버 오류가 발생했습니다' 
        })
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
