const express = require('express')
const router = express.Router()
const db = require('../../models')
const User = db.User

// go to login page
router.get('/login', (req, res) => {
  res.render('login')
})

// login request
router.post('/login', (req, res) => {
  res.send('login')
})

// go to register page
router.get('/register', (req, res) => {
  res.render('register')
})

// register request
router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  console.log(name, email, password, confirmPassword)
  User.create({ name, email, password })
    .then(user => res.redirect('/'))
})

// logout request
router.get('/logout', (req, res) => {
  res.send('logout')
})

module.exports = router
