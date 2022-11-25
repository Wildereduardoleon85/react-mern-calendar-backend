import { Router } from 'express'
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/index.js'
import { validateJwt, createEventValidation } from '../middlewares/index.js'

const eventRoutes = Router()

eventRoutes.use(validateJwt)

eventRoutes.route('/').get(getEvents).post(createEventValidation, createEvent)
eventRoutes
  .route('/:id')
  .put(createEventValidation, updateEvent)
  .delete(deleteEvent)

export { eventRoutes }
