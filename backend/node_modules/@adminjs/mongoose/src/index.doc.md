### A Mongoose database adapter for AdminJS.

#### Installation

To install the adapter run

```
yarn add @adminjs/mongoose
```

### Usage

In order to use it in your project register the adapter first:

```javascript
const AdminJS = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

AdminJS.registerAdapter(AdminJSMongoose)
```

### Passing an entire database

You can now pass an entire database to {@link AdminJSOptions}

```javascript
const mongoose = require('mongoose')

// even if we pass entire database, models have to be in scope
require('path-to-your/mongoose-model1')
require('path-to-your/mongoose-model2')

const run = async () => {
  const connection = await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
  })
  const AdminJS = new AdminJS({
    databases: [connection],
    //... other AdminJSOptions
  })
  //...
}
run()
```

> Notice, that we connected with the database BEFORE passing it to
> the **AdminJS({})** options. This is very important. Otherwise,
> AdminJS might not find any resources.

### Passing each resource

Passing via _resource_ gives you the ability to add additional {@link ResourceOptions}

```javascript
const User = mongoose.model('User', { name: String, email: String, surname: String })

const run = async () => {
  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
  })
  const AdminJS = new AdminJS({
    resources: [{
      resource: User,
      options: {
        //...
      }
    }],
    //... other AdminJSOptions
  })
}
```