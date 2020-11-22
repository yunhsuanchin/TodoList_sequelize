if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const routes = require('./routes')
const session = require('express-session')
const usePassport = require('./config/passport')
const { locals } = require('./middleware/locals')
const flash = require('connect-flash')

const app = express()
const PORT = process.env.PORT

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(flash())
app.use(locals)
app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
