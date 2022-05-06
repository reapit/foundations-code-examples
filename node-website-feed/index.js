require('dotenv').config()
const express = require('express')
const app = express()
const { propertiesController } = require('./src/controllers/properties')

app.use('/elements', express.static(__dirname + '/node_modules/@reapit/elements/dist'))

app.set('views', './src/views')

app.set('view engine', 'hbs')

app.get('/', propertiesController)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
