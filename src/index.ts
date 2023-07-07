import { server } from './server/Server'

server.listen(process.env.PORT_URL || 3333, () =>
  console.log(`app rodando na porta ${process.env.PORT_URL || 3333}`),
)
