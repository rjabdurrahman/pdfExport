const _ = require('lodash');
let users = require('./../../assets/users.json');

module.exports = function (req, res) {
    let user = _.find(users, req.body)
    if (user) {
        res.cookie('user', user, { maxAge: 865000000 })
        res.redirect('/')
    }
    else res.send('Login Failed');
}