import mongoose from 'mongoose'
import MongooseDatabase from '../src/database'
import Resource from '../src/resource'

describe('Database', () => {
  describe('#resources', () => {
    let resources: Resource[]

    beforeEach(() => {
      resources = new MongooseDatabase(mongoose.connection).resources()
    })

    it('return all resources', () => {
      expect(resources.length).toEqual(3)
    })
  })
})
