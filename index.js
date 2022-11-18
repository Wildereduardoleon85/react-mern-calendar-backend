import './utils/dotenv.js'
import express from 'express'
import { authRoutes, eventRoutes } from './routes/index.js'
import { dbConnection } from './database/config.js'
import cors from 'cors'

// Initializations
const app = express()
dbConnection()

// Enable cors
app.use(cors())

// Public directory
app.use(express.static('public'))

// Body parse
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/events', eventRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running in port ${port}`))
