import { Router } from 'express'
import { CidadesController } from '../controllers'

const router = Router()

router.get('/', (req, res) => {
  return res.send('Fala meu trutaaa!')
})

// pegando params pela url
router.post(
  '/cidades',
  CidadesController.createValidation,
  CidadesController.create,
)

// testando a query na url usando o ?
router.post('/test', (req, res) => {
  console.log(req.query.test)
  return res.json(req.body)
})

export { router }
