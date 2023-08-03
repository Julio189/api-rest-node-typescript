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

router.get(
  '/cidades',
  CidadesController.getAllValidation,
  CidadesController.getAll,
)

export { router }
