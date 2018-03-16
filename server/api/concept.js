const router = require('express').Router()
module.exports = router
const { Concept } = require('../db/models')

router.get('/', (req, res, next) => {
  Concept.findAll({})
    .then(concepts => res.json(concepts))
    .catch(next)
})
