const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

// home page
router.get('/', async (req, res) => {
  try {
    const UserId = req.user.id
    const todos = await Todo.findAll({
      where: {
        UserId
      },
      raw: true,
      nest: true
    })
    res.render('index', { todos })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
