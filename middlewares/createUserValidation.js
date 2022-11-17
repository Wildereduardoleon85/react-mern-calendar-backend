import { check } from 'express-validator'
import { validateFields } from '../utils/validateFields.js'

const validations = [
  check('name', 'The name is required').not().isEmpty(),
  check('email', 'The email is required').isEmail(),
  check('password', 'The password must be at least 6 characters').isLength({
    min: 6,
  }),
]

export const createUserValidation = [...validations, validateFields]
