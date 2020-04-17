const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const thingSchema = new Schema({}, { strict: false });
var Thing = mongoose.model('Thing', thingSchema, 'client_2019');
module.exports = Thing;