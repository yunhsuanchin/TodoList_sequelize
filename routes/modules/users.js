const express = require('express')
const db = require('../../models')
const bcrypt = require('bcryptjs')
const router = express.Router()
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
  User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        console.log('User already exists.')
        return res.render('register', {
          name,
          email,
          password,
          confirmPassword
        })
      }

      return bcrypt.genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({
          name,
          email,
          password
        }))
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
    })
})

// logout request
router.get('/logout', (req, res) => {
  res.send('logout')
})

module.exports = router
