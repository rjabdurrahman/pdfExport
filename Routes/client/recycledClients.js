const DeletedClient = require('../../Models/DeletedClient')

module.exports = (req, res) => {

    DeletedClient.find(
        {},
        {"signaletique.numero_de_dossier": 1, 
        "signaletique.contribuable.nom": 1, 
        "signaletique.contribuable.prenom": 1,
        "signaletique.contribuable.telephone": 1,
        "signaletique.contribuable.courriel": 1
        }   
        ).exec((err, result)=>{
            if (err) res.send(err)
            else {
                res.send(result);
            }
        });

}