const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser');
const _ = require('lodash');
const connectDB = require('./config');
app.use(cookieParser());
connectDB();
const users = require('./assets/users.json');
const apiRoute = require('./Routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/login', function (req, res) {
    let user = _.find(users, req.body)
    if (user) {
        res.cookie('user', user, { maxAge: 360000 })
        res.redirect('/')
    }
    else res.send('Login Failed');
});
app.get('/logout', (req, res) => {
    res.clearCookie('user')
    res.redirect('/')
})

app.use('/api', apiRoute);
app.get('/',
    function (req, res, next) {
        app.use(express.static('public'))
        return next();
    },
    function (req, res, next) {
        if (!req.cookies.user) {
            res.sendFile(path.join(__dirname, 'public/login', 'index.html'));
        }
        else return next();
    },
    function (req, res, next) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
);

// app.use(function (req, res) {
//     res.send('404 Page not Fount!');
// })

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening on Port ${server.address().port}`));