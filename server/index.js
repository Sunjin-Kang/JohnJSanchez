const path = require('path')
const PORT = process.env.PORT || 8888
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const db = require('./db')

if (process.env.NODE_ENV !== 'production') require('../secrets')

const app = express()

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))
  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // api routes
  app.use('/api', require('./api'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '../dist')))

  // sends index.html
  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(`${__dirname}/../dist/index.html`))
  })

  // error handling
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

// app starts listening
const startApp = () => {
  app.listen(PORT, () => {
    console.log(`~~~~~~~~ Server Listening On PORT: ${PORT} ~~~~~~~~`)
  })
}

const syncDb = () => db.sync()

syncDb()
createApp()
startApp()
