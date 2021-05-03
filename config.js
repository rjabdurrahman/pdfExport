const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = async () => {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => {
      console.log(err);
    })
}

module.exports = connectDB
