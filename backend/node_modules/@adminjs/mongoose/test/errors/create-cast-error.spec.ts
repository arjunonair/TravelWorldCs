import { createCastError } from '../../src/utils/create-cast-error'
import { SAMPLE_CAST_ERROR } from '../fixtures/mongoose-cast-error'
import { SAMPLE_CAST_ARRAY_ERROR } from '../fixtures/mongoose-cast-array-error'

describe('createCastError', () => {
  describe('throwin cast error on update after one key has error', () => {
    it('has error for nested "parent.age" (errorKey) field', () => {
      const error = createCastError(SAMPLE_CAST_ERROR)

      expect(error.propertyErrors.age.type).toEqual('Number')
    })
  })

  describe('throwing cast error on update when one array field has error', () => {
    it('throws an error for root field', () => {
      const error = createCastError(SAMPLE_CAST_ARRAY_ERROR)

      expect(error.propertyErrors.authors.type).toEqual('ObjectId')
    })
  })
})
