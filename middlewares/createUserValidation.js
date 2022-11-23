import { check } from 'express-validator'

export const createUserValidation = [
  check('name', 'The name is required').not().isEmpty(),
  check('email', 'The email is required').isEmail(),
  check('password', 'The password must be at least 6 characters').isLength({
    min: 6,
  }),
]
