const DeletedClient = require('../../Models/DeletedClient')

module.exports = async (req, res) => {
    try {
        let count = await DeletedClient.countDocuments();
        res.json({ count })
    } catch ({ message }) {
        res.status(500).json({ err: message })
    }
}