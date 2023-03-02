import Resource from '../../src/resource'
import { User } from '../utils/models'


describe('Resource #position', () => {
  it('returns position of a parent field', () => {
    const property = new Resource(User).property('parent')

    expect(property.position()).toEqual(4)
  })
})
