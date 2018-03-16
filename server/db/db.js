const Sequelize = require('sequelize')
// const db = new Sequelize(
//   process.env.DATABASE_URL || 'postgres://localhost:5432/johnjsanchez', {
//     logging: false
//   }
// )
const db = new Sequelize(process.env.DATABASE_URL || 'johnjsanchez', 'postgres', 'postgres', { dialect: 'postgres' })
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = db
