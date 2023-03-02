import Resource from '../../src/resource'
import { User } from '../utils/models'
import Property from '../../src/property'

describe('Resource #property', () => {
  let resource
  let returnedProperty

  beforeEach(() => {
    resource = new Resource(User)
    returnedProperty = resource.property('email')
  })

  it('returns selected property for an email', () => {
    expect(returnedProperty.name()).toEqual('email')
  })

  it('returns instance of Property class', () => {
    expect(returnedProperty).toBeInstanceOf(Property)
  })
})
