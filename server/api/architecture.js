const router = require('express').Router()
module.exports = router
const { Architecture } = require('../db/models')

router.get('/', (req, res, next) => {
  Architecture.findAll({include: [{all: true, nexted: true}]})
    .then(projects => res.json(projects))
    .catch(next)
})
