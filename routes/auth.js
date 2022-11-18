import { Router } from 'express'
import { createUser, loginUser, renewToken } from '../controllers/index.js'
import {
  createUserValidation,
  loginUserValidation,
  validateJwt,
} from '../middlewares/index.js'

const authRoutes = Router()

authRoutes.post('/new', createUserValidation, createUser)
authRoutes.post('/', loginUserValidation, loginUser)
authRoutes.get('/renew', validateJwt, renewToken)

export { authRoutes }
