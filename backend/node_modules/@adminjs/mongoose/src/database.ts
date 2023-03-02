import { BaseDatabase } from 'adminjs'
import type { Connection } from 'mongoose'

import Resource from './resource'

class Database extends BaseDatabase {
  private readonly connection: Connection;

  constructor(connection) {
    super(connection)
    this.connection = connection
  }

  static isAdapterFor(connection) {
    return connection.constructor.name === 'Mongoose'
  }

  resources() {
    return this.connection.modelNames().map(name => (
      new Resource(this.connection.model(name))
    ))
  }
}

export default Database
