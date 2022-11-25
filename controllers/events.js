import { EventModel } from '../models/index.js'

/**
 * @route GET 'api/events'
 * @desc Get all events
 */
export const getEvents = async (req, res) => {
  try {
    const events = await EventModel.find().populate('user', 'name')
    res.status(200).json({
      ok: true,
      events,
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
export const updateEvent = async (req, res) => {
  const { params, body, uid } = req

  try {
    const eventToBeUpdated = await EventModel.findById(params.id)

    if (!eventToBeUpdated) {
      return res.status(404).json({
        ok: false,
        msg: `The event with the id ${params.id} doesn't exists`,
      })
    }

    if (uid !== String(eventToBeUpdated.user)) {
      return res.status(401).json({
        ok: false,
        msg: "You aren't authorized to update this event",
      })
    }

    const eventUpdated = await EventModel.findByIdAndUpdate(
      params.id,
      { ...body, user: uid },
      {
        new: true,
      }
    )

    res.status(200).json({
      ok: true,
      eventUpdated,
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
 * @route DELETE 'api/events/:id'
 * @desc Deletes an event
 */
export const deleteEvent = async (req, res) => {
  const { params, uid } = req

  try {
    const eventToBeDeleted = await EventModel.findById(params.id)

    if (!eventToBeDeleted) {
      return res.status(404).json({
        ok: false,
        msg: `The event with the id ${params.id} doesn't exists`,
      })
    }

    if (uid !== String(eventToBeDeleted.user)) {
      return res.status(401).json({
        ok: false,
        msg: "You aren't authorized to delete this event",
      })
    }

    await EventModel.deleteOne({ _id: params.id })

    res.status(200).json({
      ok: true,
      msg: `Event with id ${params.id} deleted`,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong',
    })
  }
}
