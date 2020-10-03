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
const { nextTick } = require('process')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.post('/login', userLogin)
app.get('/logout', userLogOut)
app.use('/api', apiRoute)
app.use(/\/myapp\/(home|info)/, (req, res, next) => {
  if (!req.cookies.user) {
    res.redirect('/myapp/login')
  }
  else next()
})
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/myapp/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'))
})
const server = app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on Port:: ${server.address().port}`)
)
