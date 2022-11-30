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
      name: newUser.name,
      uid: newUser.id,
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
    res.status(401).json({
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
      name: user.name,
      uid: user.id,
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
export const renewToken = async (req, res) => {
  const { uid, name } = req
  const token = await generateJwt(uid, name)

  res.json({
    ok: true,
    msg: 'renew',
    token,
  })
}
