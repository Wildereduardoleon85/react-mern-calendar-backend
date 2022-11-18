import { UserModel } from '../models/index.js'
import bcrypt from 'bcryptjs'
import { generateJwt } from '../helpers/index.js'

/**
 * @route POST 'api/auth/new'
 * @desc creates a new user
 */
export const createUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email })

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'The user alredy exists',
      })
    }

    const newUser = new UserModel(req.body)
    const salt = bcrypt.genSaltSync()

    newUser.password = bcrypt.hashSync(password, salt)

    await newUser.save()

    const token = await generateJwt(newUser.id, newUser.name)

    res.status(201).json({
      ok: true,
      msg: 'User registered',
      token,
    })
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
export const loginUser = async (req, res) => {
  const { password, email } = req.body

  const setWrongCredentials = () => {
    res.status(400).json({
      ok: false,
      msg: 'Wrong credentials',
    })
  }

  try {
    const user = await UserModel.findOne({ email })

    if (!user) return setWrongCredentials()

    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!isPasswordValid) return setWrongCredentials()

    const token = await generateJwt(user.id, user.name)

    return res.status(200).json({
      ok: true,
      masg: 'Login successful',
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
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
