const express = require('express')
const home = require('./modules/home')
const users = require('./modules/users')
const router = express.Router()

router.use('/', home)
router.use('/users', users)

module.exports = router
