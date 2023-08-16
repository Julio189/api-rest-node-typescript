import { Request, Response } from 'express'
import * as yup from 'yup'
import { validation } from '../../shared/middlewares'
import { StatusCodes } from 'http-status-codes'

interface IQueryProps {
  page?: number
  filter?: number
  limit?: string
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      filter: yup.number().optional().moreThan(0),
      limit: yup.string().optional(),
    }),
  ),
}))

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response,
) => {
  res.setHeader('acess-control-expose-headers', 'x-total-count')
  res.setHeader('x-total-count', 1)

  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      nome: 'Salesopolis',
    },
  ])
}
