const Subscriber = require('../../Models/Subscriber')
let subscriberModel = require('../../Models/Subscriber')
module.exports = function (req, res) {
    new Subscriber({
        email: req.body.email,
        language: req.body.language
    }).save()
    .then(() => {
        res.json({
            success: 'Email has been registered!'
        })
    })
    .catch((err) => {
        res.send({err: err.code});
    })
}