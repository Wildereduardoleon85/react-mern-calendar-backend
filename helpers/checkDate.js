import { isValid as isValidDate } from 'date-fns'

export const checkDate = (value) => {
  if (!value) return

  return isValidDate(value) || false
}
