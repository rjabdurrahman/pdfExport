const router = require('express').Router();
const Client = require('../Models/Client');
let page1 = require('../assets/page1');
let page2 = require('../assets/page2');
// Adding new client.......
router.get('/', (req, res) => {
    res.send('API is live');
})

router.post('/addclient', (req, res) => {
    res.send('HOMEPAGE');
    let idf = req.body;
    page1.signaletique.contribuable.nom = idf.nom;
    page1.signaletique.contribuable.prenom = idf.prenom;
    var clients = new Client(page1);
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