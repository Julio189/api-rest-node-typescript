/* eslint-disable no-undef */
import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidades - delete', () => {
  it('Apaga registro', async () => {
    const res1 = await testServer.post('/cidades').send({
      nome: 'Salesopolis',
    })
    expect(res1.statusCode).toEqual(StatusCodes.CREATED)

    const resApaga = await testServer.delete(`/cidades/${res1.body}`).send()

    expect(resApaga.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })

  it('Tenta apagar registro que não existe', async () => {
    const res1 = await testServer.delete('/cidades/99999').send()

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res1.body).toHaveProperty('errors.default')
  })
})
