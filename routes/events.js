import { Router } from 'express'
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/index.js'
import { validateJwt } from '../middlewares/index.js'

const eventRoutes = Router()

eventRoutes.use(validateJwt)
eventRoutes.route('/').get(getEvents).post(createEvent)
eventRoutes.route('/:id').put(updateEvent).delete(deleteEvent)

export { eventRoutes }
