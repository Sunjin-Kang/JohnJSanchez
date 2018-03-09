const path = require('path')
const PORT = process.env.PORT || 8888
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

if (process.env.NODE_ENV !== 'production') require('../secrets')

const app = express()

const createApp = () => {
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use('/api', require('./api'))

  app.use(express.static(path.join(__dirname, '../dist')))

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
const startApp = () => {
  app.listen(PORT, () => {
    console.log(`~~~~~~~~ Server Listening On PORT: ${PORT} ~~~~~~~~`)
  })
}

createApp()
startApp()
