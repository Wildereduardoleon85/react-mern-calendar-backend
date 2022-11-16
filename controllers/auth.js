/**
 * @route POST 'api/auth/new'
 * @desc creates a new user
 */
export const createUser = (req, res) => {
  const { name, email, password } = req.body

  res.json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  })
}

/**
 * @route POST 'api/auth'
 * @desc login created user
 */
export const loginUser = (req, res) => {
  const { name, email } = req.body

  res.json({
    ok: true,
    msg: 'login',
    name,
    email,
  })
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
