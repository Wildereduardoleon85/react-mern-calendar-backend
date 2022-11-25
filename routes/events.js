import { Router } from 'express'
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/index.js'
import {
  validateJwt,
  createEventValidation,
  validateFields,
} from '../middlewares/index.js'

const eventRoutes = Router()

eventRoutes.use(validateJwt)

eventRoutes
  .route('/')
  .get(getEvents)
  .post([createEventValidation, validateFields], createEvent)
eventRoutes
  .route('/:id')
  .put([createEventValidation, validateFields], updateEvent)
  .delete(deleteEvent)

export { eventRoutes }
