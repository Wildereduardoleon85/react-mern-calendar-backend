import { check } from 'express-validator'

export const loginUserValidation = [
  check('email', 'The email is required').isEmail(),
  check('password', 'The password must be at least 6 characters').isLength({
    min: 6,
  }),
]
