import express from 'express'
import dotenv from 'dotenv'

// Initializations
const app = express()
dotenv.config()

// Public directory
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json({
    ok: true,
  })
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running in port ${port}`))
