import { check } from 'express-validator'
import { validateFields } from './index.js'

export const loginUserValidation = [
  check('email', 'The email is required').isEmail(),
  check('password', 'The password must be at least 6 characters').isLength({
    min: 6,
  }),
  validateFields,
]
