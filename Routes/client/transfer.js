function transferClient({ params }, res) {
    res.send('Transfer Route' + params.id);
}

module.exports = transferClient;