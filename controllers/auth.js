/**
 * @route POST 'api/auth/new'
 * @desc creates a new user
 */
export const createUser = (req, res) => {
  res.json({
    ok: true,
    msg: 'register',
  })
}

/**
 * @route POST 'api/auth'
 * @desc login created user
 */
export const loginUser = (req, res) => {
  res.json({
    ok: true,
    msg: 'login',
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
