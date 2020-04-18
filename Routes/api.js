const router = require('express').Router();
// Adding new client.......
router.get('/', (req, res) => {
    res.send('API is live');
})

router.post('/addclient', (req, res) => {
    res.send('HOMEPAGE');
    let idf = req.body;
    data1.signaletique.contribuable.nom = idf.nom;
    data1.signaletique.contribuable.prenom = idf.prenom;
    var clients = new Client(data1);
    clients.save();
    console.log("new data inserted");
});

router.post('/update', (req, res) => {
    let idf = req.body;
    let ObjectID = require('mongodb').ObjectID;
    Client.findOneAndUpdate({ "_id": ObjectID("5e99f5573905150e14774baf") }, idf, { upsert: true }, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

// Single client find....
router.get('/client/:id', (req, res) => {
        let id = req.params.id;
        Client.findById(id, (err, client) => {
            if (err) res.send(err)
            else res.send(client)
        });
    })
    // All client find....
router.get('/clients', (req, res) => {
    Client.find((err, result) => {
        if (err) res.send(err)
        else {
            res.send(result);
        }
    });
})

module.exports = router;