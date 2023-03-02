import { ValidationError } from 'adminjs'
import { factory } from 'factory-girl'
import Resource from '../../src/resource'
import validUserRecord from '../fixtures/valid-user-record'
import { Article, Pesel, User } from '../utils/models'

describe('Resource #create', () => {
  it('creates new record with valid parameters', async () => {
    const resource = new Resource(User)

    const record = await resource.create(validUserRecord)

    expect(await resource.count()).toEqual(1)
    expect(record).toBeInstanceOf(Object)
  })

  it('throws validation error for record with invalid parameters', async () => {
    const resource = new Resource(User)

    await expect(() => resource.create({ email: '', passwordHash: '' })).rejects.toThrow(ValidationError)
  })

  it('throws validation error for record with cast errors in nested schema', async () => {
    const resource = new Resource(User)

    try {
      await resource.create({
        email: 'a@a.pl',
        passwordHash: 'asdasdasd',
        'parent.age': 'not a number',
      })

      throw new Error('Should throw validation error')
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError)
      expect(error.propertyErrors['parent.age'].type).toEqual('Number')
      expect(error.propertyErrors.parent.type).toEqual('ValidationError')
    }
  })

  it('throws duplicate error for record with unique field', async () => {
    const peselResource = new Resource(Pesel)

    try {
      await peselResource.create({ pesel: '1' })
      await peselResource.create({ pesel: '1' })
    } catch (error) {
      expect(error).toBeInstanceOf(ValidationError)
      expect(error.propertyErrors.pesel.type).toEqual('duplicate')
    }
  })

  it('creates resource with id field passed as an empty string', async () => {
    const resource = new Resource(Article)

    await resource.create({ content: 'some content', createdBy: '' })

    const recordsCount = await resource.count()
    expect(recordsCount).toEqual(1)
  })

  it('creates new resource for record with reference', async () => {
    const resource = new Resource(Article)
    const userRecords = await factory.createMany('user', 1)

    const createdRecord = await resource.create({ content: '', createdBy: userRecords[0]._id })

    expect(createdRecord.createdBy.toString()).toEqual(userRecords[0]._id.toString())
  })

  it('creates new object for record with nested array', async () => {
    const resource = new Resource(User)
    await factory.createMany('user', 1)
    const countBefore = await resource.count()

    await resource.create({
      email: 'john@doe.com',
      passwordHash: 'somesecretpasswordhash',
      'parent.name': 'name',
      'parent.nestedArray': '',
      'parent.nestedObject': '',
      'family.0.name': 'some string',
      'family.0.nestedArray.0': '',
      'family.1': '',
    })

    const countAfter = await resource.count()
    expect(countAfter - countBefore).toEqual(1)
  })
})
