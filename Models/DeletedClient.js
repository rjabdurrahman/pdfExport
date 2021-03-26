const { Schema, model } = require('mongoose')
const deletedClientSchema = new Schema({
    oldId: {
        type: String,
        required: true
    }
}, { strict: false })
let DeletedClient = model('DeletedClient', deletedClientSchema, 'recycled_clients')
module.exports = DeletedClient