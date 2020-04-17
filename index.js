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

app.post('/update/identification', (req, res) => {
    let idf = req.body;
    res.send(`Nom is: ${idf.name}, Prenom is: ${idf.prenom}`);
})

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));