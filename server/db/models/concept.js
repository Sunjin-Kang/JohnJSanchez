const Sequelize = require('sequelize')
const db = require('../db')

db.define('concept', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
module.exports(db)
