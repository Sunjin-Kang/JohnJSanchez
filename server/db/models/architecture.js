const Sequelize = require('sequelize')
const db = require('../db')

const Architecture = db.define('architecture', {
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

db.sync({force: true}).then(() => {
  return Architecture.bulkCreate([
    {
      name: 'Library for the Illiterate',
      instructor: 'Christoph Kumpusch',
      date: 'Spring 2017',
      course: 'Core II',
      description: 'Lorem Ipsum Description',
      images: ['url']
    },
    {
      name: 'Light Pillar',
      instructor: 'Alfie Koetter',
      date: 'Fall 2016',
      course: 'Core I',
      description: 'Lorem Ipsum Description',
      images: ['url']
    },
    {
      name: 'Light Forms',
      instructor: 'Alfie Koetter',
      date: 'Fall 2016',
      course: 'Core I',
      description: 'Lorem Ipsum Description',
      images: ['url']
    },
    {
      name: 'Eclipsed',
      instructor: 'Alfie Koetter',
      date: 'Fall 2016',
      course: 'Core I',
      description: 'Lorem Ipsum Description',
      images: ['url']
    },
    {
      name: 'Library for the Illiterate',
      instructor: 'Alfie Koetter',
      date: 'Spring 2017',
      course: 'Core I',
      description: 'Lorem Ipsum Description',
      images: ['url']
    },
    {
      name: 'Library for the Illiterate',
      instructor: 'Alfie Koetter',
      date: 'Spring 2017',
      course: 'Core I',
      description: 'Lorem Ipsum Description',
      images: ['url']
    }
  ])
})

module.exports = Architecture
