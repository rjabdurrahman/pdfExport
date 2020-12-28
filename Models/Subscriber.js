const { Schema, model } = require('mongoose')
const subscriberSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true,
    default: Date.now()
  }
})
let Subscriber = model('Subscriber', subscriberSchema, 'subscribers')
module.exports = Subscriber
