import { isValid as isValidDate } from 'date-fns'

export const checkDate = (value) => {
  if (!value) return

  let parsedDate = value

  if (typeof value === 'string') {
    parsedDate = Date.parse(value)
  }

  if (isNaN(parsedDate)) {
    return false
  }

  return isValidDate(parsedDate) || false
}
