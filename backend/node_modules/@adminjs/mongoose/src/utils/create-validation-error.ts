import { ValidationError } from 'adminjs'

export const createValidationError = (originalError): ValidationError => {
  const errors = Object.keys(originalError.errors).reduce((memo, key) => {
    const { message, kind, name } = originalError.errors[key]
    return {
      ...memo,
      [key]: {
        message,
        type: kind || name,
      },
    }
  }, {})
  return new ValidationError(errors)
}
