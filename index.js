const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const connectDB = require('./config')
app.use(cookieParser())
connectDB()
const userLogin = require('./Routes/user/login')
const userLogOut = require('./Routes/user/logout')
const apiRoute = require('./Routes/api')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/login', userLogin)
app.get('/logout', userLogOut)

app.use('/api', apiRoute)
app.use(express.static('public'))
app.get('/mylogin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login', 'index.html'))
})
app.get(
  '/*',
  function (req, res, next) {
    if (!req.cookies.user) res.redirect('/mylogin');
    else res.sendFile(path.join(__dirname, 'public', 'index.html'))
    // return next();
  }
  // function (req, res, next) {
  //     if (!req.cookies.user) {
  //   res.sendFile(path.join(__dirname, 'public/login', 'index.html'));
  //     }
  //     else return next();
  // },
  // function (req, res, next) {
  // }
)

const server = app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on Port:: ${server.address().port}`)
)
