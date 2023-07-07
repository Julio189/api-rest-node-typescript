import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.get('/', (req, res) => {
  return res.send('Fala meu trutaaa!')
})

// pegando params pela url
router.post('/test/:id', (req, res) => {
  console.log(req.params.id)
  return res.status(StatusCodes.BAD_REQUEST).json(req.body)
})

// testando a query na url usando o ?
router.post('/test', (req, res) => {
  console.log(req.query.test)
  return res.json(req.body)
})

export { router }
