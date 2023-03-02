import mongoose from 'mongoose'
import { factory } from 'factory-girl'


const globalAny = global as any

// @ts-ignore
const NestedObject = new mongoose.Schema({
  someProperty: Number,
})

// @ts-ignore
const SubType = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  nestedArray: [NestedObject],
  nestedObject: NestedObject,
})

globalAny.User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  genre: { type: String, enum: ['male', 'female'] },
  arrayed: [String],
  parent: SubType,
  family: [SubType],
}))

globalAny.Pesel = mongoose.model('Pesel', new mongoose.Schema({
  pesel: {
    type: String, unique: true, required: true, sparse: true,
  },
}))

globalAny.Article = mongoose.model('Article', new mongoose.Schema({
  content: String,
  owners: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}))

export const { User, Article, Pesel }: Record<string, mongoose.Model<any>> = globalAny

factory.define('user', User, {
  email: factory.sequence('User.email', n => `john@doe${n}.com`),
  passwordHash: 'somehashedpassword',
})
