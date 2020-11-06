const { Schema, model } = require('mongoose')
const deletedClientSchema = new Schema({
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiededOn: {
        type: Date,
        default: Date.now
    }
}, { strict: false })
let DeletedClient = model('DeletedClient', deletedClientSchema, 'recycled_clients')
module.exports = DeletedClient