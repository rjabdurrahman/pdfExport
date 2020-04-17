const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clientSchema = new Schema({}, { strict: false });
let Client = mongoose.model('Client', clientSchema, 'client_2019');
module.exports = Client;