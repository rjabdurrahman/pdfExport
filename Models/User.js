const { Schema, model } = require('mongoose')
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  }
})
let User = model('User', userSchema, 'users')
module.exports = User
