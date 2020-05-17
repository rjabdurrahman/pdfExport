const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clientSchema = new Schema({}, { strict: false });
let Client = mongoose.model('Client', clientSchema, 'clients_2019');
module.exports = Client;