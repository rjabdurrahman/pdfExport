const DeletedClient = require('../../Models/DeletedClient')

module.exports = async (req, res) => {
    try {
        const selections = [
            2019,
            2020,
            2021,
            2022,
            2023
        ].map(y => ({
            [`y${y}.signaletique.numero_de_dossier`]: 1,
            [`y${y}.signaletique.contribuable.nom`]: 1,
            [`y${y}.signaletique.contribuable.prenom`]: 1,
            [`y${y}.signaletique.contribuable.telephone`]: 1,
            [`y${y}.signaletique.contribuable.courriel`]: 1
        }));
        const result = await DeletedClient.find(
            {},
            {
                ...selections[0],
                ...selections[1],
                ...selections[2],
                ...selections[3],
                ...selections[4]
            }
        ).lean().exec();
        return res.send(result);
    } catch (err) {
        return res.send(err);
    }
}