import { check } from 'express-validator'
import { validateFields } from '../utils/validateFields.js'

const validations = [
  check('email', 'The email is required').isEmail(),
  check('password', 'The password must be at least 6 characters').isLength({
    min: 6,
  }),
]

export const loginUserValidation = [...validations, validateFields]
