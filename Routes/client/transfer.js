const Client = require('../../Models/Client');

function transferClient({ body }, res) {
    let clientId = body.client._id;
    let selectedYear = body.selectedYear;
    let targetYear = body.targetYear;
    Client.findById(clientId, (err, client) => {
        if (err) res.send(err)
        else {
            let { signaletique, enfants, etat_civil } = client['y' + selectedYear];
            Client.findByIdAndUpdate(clientId, {
                ['y' + targetYear]: { signaletique, enfants, etat_civil }
            }, { new: true }, (err, client) => {
                if (err) res.send(err);
                else res.send(client);
            });
        }
    });
}

module.exports = transferClient;