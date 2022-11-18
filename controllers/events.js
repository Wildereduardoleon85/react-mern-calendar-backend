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
export const createEvent = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'create event',
  })
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
