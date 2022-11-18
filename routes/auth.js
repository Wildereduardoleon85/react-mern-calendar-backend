import { Router } from 'express'
import { createUser, loginUser, renewToken } from '../controllers/auth.js'
import {
  createUserValidation,
  loginUserValidation,
  validateJwt,
} from '../middlewares/index.js'

const authRoutes = Router()

authRoutes.post('/new', createUserValidation, createUser)
authRoutes.post('/', loginUserValidation, loginUser)
authRoutes.get('/renew', validateJwt, renewToken)

export default authRoutes
