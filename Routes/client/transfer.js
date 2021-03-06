const Client = require('../../Models/Client');

async function transferClient({ body }, res) {
    try {
        let clientId = body.client._id;
        let selectedYear = body.selectedYear;
        let targetYear = body.targetYear;
        let client = await Client.findById(clientId).lean().exec();
        let { Bureaux_d_imposition, Bureaux_d_imposition_adress, signaletique, enfants, etat_civil } = client['y' + selectedYear];
        Client.findByIdAndUpdate(clientId, {
            ['y' + targetYear]: { Bureaux_d_imposition, Bureaux_d_imposition_adress, signaletique, enfants, etat_civil }
        }, { new: true }, (err, client) => {
            if (err) res.send(err);
            else res.send(client);
        });
    } catch (err) {
        res.send(err);
    }
}

module.exports = transferClient;