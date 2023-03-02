import { createValidationError } from '../../src/utils/create-validation-error'
import { SAMPLE_VALIDATION_ERROR } from '../fixtures/mongoose-validation-error'
import { SAMPLE_NESTED_VALIDATION_ERROR } from '../fixtures/mongoose-nested-validation-error'

describe('#createValidationError', () => {
  describe('regular error', () => {
    it('has errors', () => {
      const error = createValidationError(SAMPLE_VALIDATION_ERROR)

      expect(Object.keys(error.propertyErrors).length).toEqual(2)
    })

    it('has error for email', () => {
      const error = createValidationError(SAMPLE_VALIDATION_ERROR)

      expect(error.propertyErrors.email.type).toEqual('required')
    })
  })

  describe('error for nested field', () => {
    it('2 errors, one for root field and one for an actual nested field', () => {
      const error = createValidationError(SAMPLE_NESTED_VALIDATION_ERROR)

      expect(Object.keys(error.propertyErrors).length).toEqual(2)
    })

    it('has error for nested "parent.age" field', () => {
      const error = createValidationError(SAMPLE_NESTED_VALIDATION_ERROR)

      expect(error.propertyErrors['parent.age'].type).toEqual('Number')
    })

    it('has error for "parent" field', () => {
      const error = createValidationError(SAMPLE_NESTED_VALIDATION_ERROR)

      expect(error.propertyErrors.parent.type).toEqual('ValidationError')
    })
  })
})
