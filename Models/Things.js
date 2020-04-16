const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const thingSchema = new Schema({ name: String }, { strict: false });
var Thing = mongoose.model('Thing', thingSchema, 'things');
module.exports = Thing;