import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import { dbConnection } from './database/config.js'

// Initializations
const app = express()
dotenv.config()
dbConnection()

// Public directory
app.use(express.static('public'))

// Body parse
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running in port ${port}`))
