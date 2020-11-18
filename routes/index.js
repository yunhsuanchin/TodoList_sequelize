const express = require('express')
const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')
const router = express.Router()

router.use('/', home)
router.use('/users', users)
router.use('/todos', todos)

module.exports = router
