const express = require('express');
const app = express();
const connectDB = require('./config');
connectDB();
const Client = require('./Models/Client');
let data = require('./assets/page1');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
    var clients = new Client(data);
    clients.save();
    console.log("new data inserted");
});

app.get('/update', (req, res) => {
    // res.send('Update Page');
    let ObjectID = require('mongodb').ObjectID;
    Client.findOneAndUpdate({ "_id": ObjectID("5e9944aef84f890dfc896749")}, { "name": "jason bourne" }, { upsert: true }, (err, result) => {
        if(err) res.send(err)
        else res.send(result)
    });
});
app.post('/update/identification', (req, res) => {
    let idf = req.body;
    res.send(`Nom is: ${idf.nom}, Prenom is: ${idf.prenom}`);
})

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));