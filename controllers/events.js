import { EventModel } from '../models/index.js'

/**
 * @route GET 'api/events'
 * @desc Get all events
 */
export const getEvents = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'get events',
  })
}

/**
 * @route POST 'api/events'
 * @desc Creates an event
 */
export const createEvent = async (req, res) => {
  const event = { ...req.body, user: req.uid }
  const newEvent = new EventModel(event)

  try {
    await newEvent.save()
    res.status(201).json({
      ok: true,
      msg: 'Event created',
      data: newEvent,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    })
  }
}

/**
 * @route POST 'api/events/:id'
 * @desc Updates an event
 */
export const updateEvent = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'update event',
  })
}

/**
 * @route DELETE 'api/events/:id'
 * @desc Deletes an event
 */
export const deleteEvent = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'delete event',
  })
}
