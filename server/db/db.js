const Sequelize = require('sequelize')
// const db = new Sequelize(
//   process.env.DATABASE_URL || 'postgres://localhost:5432/johnjsanchez', {
//     logging: false
//   }
// )
const db = new Sequelize(process.env.DATABASE_URL || 'johnjsanchez', 'iehvvuormywzhw', '9327e659b2f4b3073a8226b18966dc5f40e26313c1649ae6416acb64f2fd10b2', { dialect: 'postgres' })
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = db
