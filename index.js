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

<<<<<<< HEAD
app.get('/update', (req, res) => {
    res.send('Update Page');
     var query = { _id: '5e99248c1a01931630d48ad5' };
     Thing.findOneAndUpdate(query, { name: 'jason bourne' },{ upsert:true});
     console.log("new data updated");
});
=======
app.post('/update/identification', (req, res) => {
    let idf = req.body;
    res.send(`Nom is: ${idf.nom}, Prenom is: ${idf.prenom}`);
})
>>>>>>> f67e49a313f030e26e0953e038400c620933645c

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));