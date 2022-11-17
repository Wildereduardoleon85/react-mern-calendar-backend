import { UserModel } from '../models/index.js'

/**
 * @route POST 'api/auth/new'
 * @desc creates a new user
 */
export const createUser = async (req, res) => {
  const { email } = req.body

  try {
    const user = await UserModel.findOne({ email })
    if (user) {
      res.status(400).json({
        ok: false,
        msg: 'The user alredy exists',
      })
    } else {
      const newUser = new UserModel(req.body)
      await newUser.save()
      res.status(201).json({
        ok: true,
        msg: 'User registered',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    })
  }
}

/**
 * @route POST 'api/auth'
 * @desc login created user
 */
export const loginUser = (req, res) => {
  const { password, email } = req.body

  res.status(200).json({
    ok: true,
    msg: 'login',
    email,
    password,
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
