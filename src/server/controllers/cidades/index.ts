import * as create from './Create'
import * as getAll from './GetAll'
import * as getById from './GetbyId'
import * as updateById from './UpdatebyId'
import * as deleteById from './DeletebyId'

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
}
