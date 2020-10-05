let { ObjectID } = require('mongodb')
const User = require('../Models/User')
module.exports = {
  getProfile: async (req, res) => {
    try {
      res.json(await User.findById(req.cookies.user._id).exec())
    } catch (e) {
      res.send(err)
    }
  },
  updateProfile: (req, res) => {
    let { firstName, lastName, password, username } = req.body
    if(!username || !firstName || !lastName || !username || !password) res.send({
      err: 'Some fields are Empty!'
    })
    User.findByIdAndUpdate(
      req.cookies.user._id,
      { firstName, lastName, password, username },
      (err, result) => {
        if (err) res.send(err)
        else res.send('Updated')
      }
    )
  }
}
