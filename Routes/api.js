const router = require('express').Router();
const Client = require('../Models/Client');
let page1 = require('../assets/page1');
let page2 = require('../assets/page2');

router.get('/', (req, res) => {
    res.send('API is live');
})
// Adding new client.......
router.post('/addclient', (req, res) => {
    res.send('HOMEPAGE');
    let idf = req.body;
    page1.signaletique.contribuable.nom = idf.nom;
    page1.signaletique.contribuable.prenom = idf.prenom;
    var clients = new Client(page1);
    clients.save();
    console.log("new data inserted");
});
//client info update
router.post('/identupdate/:id', (req, res) => {
    let id = req.params.id;
    //console.log("update done!!!")
    let idf = req.body;
    let ObjectID = require('mongodb').ObjectID;
    Client.findOneAndUpdate({ "_id": ObjectID(id) }, idf, { upsert: true }, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

// client delete
router.post('/clientdelete/:id', (req, res) => {
    let id = req.params.id;
     let ObjectID = require('mongodb').ObjectID;
     Client.remove({ "_id": ObjectID(id) }, (err, result) => {
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