import { check } from 'express-validator'
import { checkDate } from '../helpers/index.js'

export const createEventValidation = [
  check('title', 'The title required').not().isEmpty(),
  check('start', 'Start date is required').not().isEmpty(),
  check('start', 'The provided date is not valid').custom(checkDate),
  check('end', 'End date is required').not().isEmpty(),
  check('end', 'The provided date is not valid').custom(checkDate),
]
