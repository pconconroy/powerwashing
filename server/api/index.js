const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/email', require('./email'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
