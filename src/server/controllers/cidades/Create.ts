import { Request, Response } from 'express'
import * as yup from 'yup'

interface ICidade {
  nome: string
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedData: ICidade | undefined
  try {
    validatedData = await bodyValidation.validate(req.body)
  } catch (error) {
    const yupError = error as yup.ValidationError
    return res.json({
      errors: {
        default: yupError.message,
      },
    })
  }

  console.log(validatedData)

  return res.send('Create!')
}
