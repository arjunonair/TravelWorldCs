import { factory } from 'factory-girl'
import Resource from '../../src/resource'
import { User } from '../utils/models'

describe('Resource #delete', () => {
  it('removes the item from the database', async () => {
    const resource = new Resource(User)
    const records = await factory.createMany('user', 12)
    const initialNumberOfRecords = await User.countDocuments()
    const idOfItemToDelete = records[0]._id

    await resource.delete(idOfItemToDelete)

    expect(await User.countDocuments()).toEqual(initialNumberOfRecords - 1)
  })
})
