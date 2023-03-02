import mongoose from 'mongoose'
import Resource from '../../src/resource'
import { User } from '../utils/models'
import Property from '../../src/property'

describe('Resource #properties', () => {
  let resource
  let returnedProperties

  beforeEach(() => {
    resource = new Resource(User)
    returnedProperties = resource.properties()
  })

  it('returns correct amount of properties', () => {
    // 8 because of implicit _id and __v properties
    expect(returnedProperties.length).toEqual(8)
  })

  it('sets the position of properties', () => {
    expect(returnedProperties.map(p => p.position())).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  })

  it('returns instances of Property class', async () => {
    expect(returnedProperties[0]).toBeInstanceOf(Property)
  })


  it('returns all fields for nested properties', () => {
    const Nested = mongoose.model('Nested', new mongoose.Schema({
      field: {
        subfield: String,
        anotherSubField: String,
      },
    }))
    const nestedResource = new Resource(Nested)

    const propertiesOfNestedResource = nestedResource.properties()

    expect(propertiesOfNestedResource.length).toEqual(4)
  })
})
