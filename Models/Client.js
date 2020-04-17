const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const thingSchema = new Schema({}, { strict: false });
let Client = mongoose.model('Client', thingSchema, 'client_2019');
module.exports = Client;