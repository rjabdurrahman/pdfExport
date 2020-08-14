let { ObjectID } = require('mongodb')
const User = require('../Models/User')
module.exports = {
  getProfile: (req, res) => {
    res.json(req.cookies.user)
  },
  updateProfile: (req, res) => {
    let userData = {}
    req.body.forEach(x => (userData[x.name] = x.value))
    User.findOneAndUpdate(
      { _id: ObjectID(req.cookies._id) },
      userData,
      (err, result) => {
        if (err) res.send(err)
        else res.send('Updated!')
      }
    )
  }
}
