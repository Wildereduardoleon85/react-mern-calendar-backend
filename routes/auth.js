import { Router } from 'express'

const authRoutes = Router()

authRoutes.get('/', (req, res) => {
  res.json({
    ok: true,
  })
})

export default authRoutes
