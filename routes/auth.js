import { Router } from 'express'
import { createUser, loginUser, renewToken } from '../controllers/auth.js'

const authRoutes = Router()

authRoutes.post('/new', createUser)
authRoutes.post('/', loginUser)
authRoutes.get('/renew', renewToken)

export default authRoutes
