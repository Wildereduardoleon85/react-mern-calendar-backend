import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    ok: true,
  })
})

const port = 5000

app.listen(port, () => console.log(`Server running in port ${port}`))
