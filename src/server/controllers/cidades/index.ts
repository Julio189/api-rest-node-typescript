import * as create from './Create'
import * as getAll from './GetAll'
import * as getById from './GetbyId'

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
}
