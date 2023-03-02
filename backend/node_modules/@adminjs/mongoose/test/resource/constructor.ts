import Resource from '../../src/resource'
import { User } from '../utils/models'


describe('Resource', () => {
  describe('#constructor', () => {
    it('stores original model', () => {
      const userResource = new Resource(User)
      expect(userResource.MongooseModel).toEqual(User)
    })
  })
})
