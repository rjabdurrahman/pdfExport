const { Schema, model } = require('mongoose')
const clientSchema = new Schema({
    year: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiededOn: {
        type: Date,
        default: Date.now
    }
}, { strict: false })
let Client = model('Client', clientSchema, 'clients_2019')
module.exports = Client