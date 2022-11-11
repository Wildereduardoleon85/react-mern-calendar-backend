import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'

// Initializations
const app = express()
dotenv.config()

// Public directory
app.use(express.static('public'))

app.use('/api/auth', authRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running in port ${port}`))
