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
app.use(/\/myapp\/(home|info|profile|logout)*/, (req, res, next) => {
  if (!req.cookies.user) {
    res.redirect('/myapp/login')
  }
  else next()
})
app.use(express.static('public'))
app.get('/', (req, res) => {
  let domain = req.hostname;
  // let domain = 'avantages-fiscaux.lu';
  if(domain == 'y-e.lu')
    res.send('');
  else if(domain == 'tax-benefits.lu')
    res.sendFile(path.join(__dirname, 'public', 'eng.html'))
  else if(domain == 'avantages-fiscaux.lu') 
    res.sendFile(path.join(__dirname, 'public', 'fr.html'))
  else if(domain == 'steuer-vorteile.lu')
    res.sendFile(path.join(__dirname, 'public', 'de.html'))
  else res.send('Website Not Found!')
})
app.get('/myapp/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'myapp/index.html'))
})
const server = app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on: http://localhost:${server.address().port}`)
)
