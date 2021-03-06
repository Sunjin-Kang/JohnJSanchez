const router = require('express').Router()
module.exports = router

// router.use('/architecture', require('./architecture'))
// router.use('/concept', require('./concept'))
router.use('/contact', require('./contact'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
