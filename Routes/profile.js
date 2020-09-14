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
    let { firstName, lastName } = req.body
    console.log(req.cookies.user._id)
    User.findByIdAndUpdate(
      req.cookies.user._id,
      { firstName, lastName },
      (err, result) => {
        if (err) res.send(err)
        else res.send('Updated')
      }
    )
  }
}
