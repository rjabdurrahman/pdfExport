const _ = require('lodash');
const User = require('../../Models/User');

module.exports = function (req, res) {
    User.find(req.body, (err, result) => {
        if(err) res.send(err)
        else if(result.length > 0) {
                res.cookie('user', result, { maxAge: 865000000 })
                res.redirect('/')
        }
        else res.send('Login Failed');
    })
}