const express = require('express');
const app = express();
const connectDB = require('./config');
connectDB();

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));