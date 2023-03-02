import { ValidationError } from 'adminjs'

const createDuplicateMessage = message => ({
  type: 'duplicate',
  message,
})

export const createDuplicateError = (
  { keyValue: duplicateEntry, errmsg }, document,
): ValidationError => {
  if (!duplicateEntry) {
    const duplicatedKey = Object.keys(document).find(key => errmsg.includes(key))

    return new ValidationError({
      [duplicatedKey]: createDuplicateMessage(`Record with that ${duplicatedKey} already exists`),
    })
  }

  const [[keyName]] = Object.entries(duplicateEntry)

  return new ValidationError({
    [keyName]: createDuplicateMessage(`Record with that ${keyName} already exists`),
  })
}
