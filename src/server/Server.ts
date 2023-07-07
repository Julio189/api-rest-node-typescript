import express from 'express'
import { router } from './routes'

// inicializa o server com o express
const server = express()

server.use(express.json())

server.use(router)

export { server }
