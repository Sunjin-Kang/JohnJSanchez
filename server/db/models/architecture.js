const Sequelize = require('sequelize')
const db = require('../db')

db.define('architecture', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  instructor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  course: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  }
})
module.exports(db)
