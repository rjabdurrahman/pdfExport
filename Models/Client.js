const { Schema, model } = require('mongoose')
const clientSchema = new Schema({
    y2019: {
        createdOn: {
            type: Date,
            default: Date.now
        },
        modifiededOn: {
            type: Date,
            default: Date.now
        },
        required: false
    },
    y2020: {
        createdOn: {
            type: Date,
            default: Date.now
        },
        modifiededOn: {
            type: Date,
            default: Date.now
        },
        required: false
    }
}, { strict: false })
let Client = model('Client', clientSchema, 'clients')
module.exports = Client