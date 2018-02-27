# carent-db

## Usage

```js
const setupDatabase = require('./')

setupDatabase().then(db => {
  // do something with db
  const result = await db.services.Car.create({ model: 'Test' })

}).catch(err => {
  // do something with error
})
```