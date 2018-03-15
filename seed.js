const pkg = require('./package.json')
const { Architecture, Concept } = require('./server/db/models')

const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`)

const architectures = [
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
]

const concepts = [
  {
    name: 'Taipei Performing Arts Center',
    image: 'url'
  }
]


const seed = () => {
  Promise.all(architectures.map(architecture =>
    Architecture.create(architecture))
  )
  .then(() =>
  Promise.all(concepts.map(concept =>
    Concept.create(concept))
  ))
}

const main = () => {
  console.log('Syncing db...', db.config.database)
  db.sync({force: true})
    .then(() => {
      console.log('Seeding database...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
      console.log(err.errors)
    })
    .then(() => {
      db.close()
      console.log('Seeding completed...')
      process.exit()
    })
}

main()


