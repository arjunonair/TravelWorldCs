import escape from 'escape-regexp'
import mongoose from 'mongoose'

/**
 * Changes AdminJS's {@link Filter} to an object acceptible by a mongoose query.
 *
 * @param {Filter} filter
 * @private
 */
export const convertFilter = (filter) => {
  if (!filter) {
    return {}
  }
  return filter.reduce((memo, filterProperty) => {
    const { property, value } = filterProperty
    switch (property.type()) {
    case 'string':
      return {
        [property.name()]: { $regex: escape(value), $options: 'i' },
        ...memo,
      }
    case 'date':
    case 'datetime':
      if (value.from || value.to) {
        return {
          [property.name()]: {
            ...value.from && { $gte: value.from },
            ...value.to && { $lte: value.to },
          },
          ...memo,
        }
      }
      break
    case 'id':
      if (mongoose.Types.ObjectId.isValid(value)) {
        return {
          [property.name()]: value,
          ...memo,
        }
      }
      return {}
    default:
      break
    }
    return {
      [property.name()]: value,
      ...memo,
    }
  }, {})
}
