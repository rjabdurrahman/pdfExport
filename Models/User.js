const { Schema, model } = require('mongoose')
const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
})
let User = model('User', userSchema, 'users')
module.exports = User