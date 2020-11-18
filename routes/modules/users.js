const express = require('express')
const router = express.Router()

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
  res.send('register')
})

// logout request
router.get('/logout', (req, res) => {
  res.send('logout')
})

module.exports = router
