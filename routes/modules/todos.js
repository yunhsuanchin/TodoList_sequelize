const express = require('express')
const { truncate } = require('fs')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

// go to create page
router.get('/new', (req, res) => {
  res.render('new')
})

// create request
router.post('/', async (req, res) => {
  try {
    const UserId = req.user.id
    await Todo.create({ ...req.body, UserId })
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

// go to detail page
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const todo = await Todo.findByPk(id)
    res.render('detail', { todo: todo.toJSON() })
  } catch (error) {
    console.log(error)
  }
})

// go to edit page
router.get('/:id/edit', async (req, res) => {
  try {
    const id = req.params.id
    const todo = await Todo.findByPk(id)
    res.render('edit', { todo: todo.toJSON() })
  } catch (error) {
    console.log(error)
  }
})

// edit request
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const { isDone, name } = req.body
    const todo = await Todo.findByPk(id)
    todo.name = name
    todo.isDone = isDone === 'on'

    await todo.save()
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
