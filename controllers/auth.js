import { validationResult } from 'express-validator'

/**
 * @route POST 'api/auth/new'
 * @desc creates a new user
 */
export const createUser = (req, res) => {
  const { name, email, password } = req.body

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    })
  } else {
    res.status(201).json({
      ok: true,
      msg: 'register',
      name,
      email,
      password,
    })
  }
}

/**
 * @route POST 'api/auth'
 * @desc login created user
 */
export const loginUser = (req, res) => {
  const { password, email } = req.body

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    })
  } else {
    res.status(200).json({
      ok: true,
      msg: 'login',
      email,
      password,
    })
  }
}

/**
 * @route GET 'api/auth/renew'
 * @desc renew user token
 */
export const renewToken = (req, res) => {
  res.json({
    ok: true,
    msg: 'renew',
  })
}
