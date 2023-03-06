const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const express = require('express')

const PORT = 3000

const start = async () => {
  await mongoose.connect('mongodb+srv://TravelWorld:TravelWorldCs01@travelworld.lnbxqsi.mongodb.net/tours_book?retryWrites=true&w=majority')
  const adminOptions = {
    // We pass Category to `resources`
    resources: [Category],
  }
  // Please note that some plugins don't need you to create AdminJS instance manually,
  // instead you would just pass `adminOptions` into the plugin directly,
  // an example would be "@adminjs/hapi"
  const admin = new AdminJS(adminOptions)
  // ... other code
  const app = express()

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}
// ... other imports
import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'
import { Category } from './category.entity'

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

start()