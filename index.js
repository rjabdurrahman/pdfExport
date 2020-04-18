const express = require('express');
const app = express();
const connectDB = require('./config');
connectDB();
const Client = require('./Models/Client');
const apiRoute = require('./Routes/api');
let data1 = require('./assets/page1');
let data2 = require('./assets/page2');

app.use(express.json());
app.use('/api', apiRoute);
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listenin on Port ${server.address().port}`));