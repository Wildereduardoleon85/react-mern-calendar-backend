import { Router } from 'express'
import { createUser, loginUser, renewToken } from '../controllers/auth.js'
import {
  createUserValidation,
  loginUserValidation,
} from '../middlewares/index.js'

const authRoutes = Router()

authRoutes.post('/new', createUserValidation, createUser)
authRoutes.post('/', loginUserValidation, loginUser)
authRoutes.get('/renew', renewToken)

export default authRoutes
