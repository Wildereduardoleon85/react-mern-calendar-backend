import { Router } from 'express'
import { createUser, loginUser, renewToken } from '../controllers/index.js'
import {
  createUserValidation,
  loginUserValidation,
  validateJwt,
  validateFields,
} from '../middlewares/index.js'

const authRoutes = Router()

authRoutes.post('/new', [createUserValidation, validateFields], createUser)
authRoutes.post('/', [loginUserValidation, validateFields], loginUser)
authRoutes.get('/renew', validateJwt, renewToken)

export { authRoutes }
