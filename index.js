const express = require('express');
const app = express();
const connectDB = require('./config');
connectDB();
const Client = require('./Models/Client');
let data1 = require('./assets/page1');
let data2 = require('./assets/page2');

app.use(express.json());
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Adding new client.......
app.post('/addclient', (req, res) => {
    res.send('HOMEPAGE');
    let idf = req.body;
    data1.signaletique.contribuable.nom = idf.nom;
    data1.signaletique.contribuable.prenom = idf.prenom;
    var clients = new Client(data1);
    clients.save();
    console.log("new data inserted");
});

app.post('/update', (req, res) => {
    let idf = req.body;
    let ObjectID = require('mongodb').ObjectID;
    Client.findOneAndUpdate({ "_id": ObjectID("5e99f5573905150e14774baf") }, idf, { upsert: true }, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

// Single client find....
app.get('/client/:id', (req, res) => {
        let id = req.params.id;
        Client.findById(id, (err, client) => {
            if (err) res.send(err)
            else res.send(client)
        });
    })
    // All client find....
app.get('/clients', (req, res) => {
    Client.find((err, result) => {
        if (err) res.send(err)
        else {
            res.send(result);
        }
    });
})

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));