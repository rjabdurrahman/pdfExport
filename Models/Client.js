const { Schema, model } = require('mongoose')
const clientSchema = new Schema({}, { strict: false })
let Client = model('Client', clientSchema, 'clients_2019')
module.exports = Client