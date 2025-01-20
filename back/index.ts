import express from 'express'
import cors from 'cors'

const app = express()
const port = 5001

app.use(cors()) // CORS 허용
app.use(express.json()) // JSON 형식 데이터 파싱

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
