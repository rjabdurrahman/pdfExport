const express = require('express');
const app = express();
const connectDB = require('./config');
connectDB();
const Thing = require('./Models/Client');
let data = require('./assets/page1');

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
     var thing = new Thing(data);
     thing.save();
     console.log("new data inserted");
});

app.get('/update', (req, res) => {
    res.send('Update Page');
     var query = { _id: '5e99248c1a01931630d48ad5' };
     Thing.findOneAndUpdate(query, { name: 'jason bourne' },{ upsert:true});
     console.log("new data updated");
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));