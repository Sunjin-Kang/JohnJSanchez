const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('concept', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
