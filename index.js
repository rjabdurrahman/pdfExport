const express = require('express');
const app = express();
const connectDB = require('./config');
connectDB();
const Thing = require('./Models/Things');

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
    // var thing = new Thing({ name: 'Carry', iAmNotInTheSchema: true });
    // thing.save();
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));