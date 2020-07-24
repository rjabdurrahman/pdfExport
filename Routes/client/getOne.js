module.exports = (req, res) => {
    let id = req.params.id;
    Client.findById(id, (err, client) => {
        if (err) res.send(err)
        else res.send(client)
    });
}