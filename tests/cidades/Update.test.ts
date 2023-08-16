/* eslint-disable no-undef */
import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidades - UpdatebyId', () => {
  it('Atualiza registro', async () => {
    const res1 = await testServer.post('/cidades').send({
      nome: 'Salesopolis',
    })
    expect(res1.statusCode).toEqual(StatusCodes.CREATED)

    const resAtualizada = await testServer
      .put(`/cidades/${res1.body}`)
      .send({ nome: 'Bragança' })

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })

  it('Tenta atualizar registro que não existe', async () => {
    const res1 = await testServer.delete('/cidades/99999').send()

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res1.body).toHaveProperty('errors.default')
  })
})
