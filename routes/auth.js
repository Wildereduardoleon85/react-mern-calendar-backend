import { Router } from 'express'
import { check } from 'express-validator'
import { createUser, loginUser, renewToken } from '../controllers/auth.js'

const authRoutes = Router()

authRoutes.post(
  '/new',
  [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  createUser
)

authRoutes.post(
  '/',
  [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  loginUser
)

authRoutes.get('/renew', renewToken)

export default authRoutes
