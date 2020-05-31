const express = require('express');
const app = express();
const path = require('path')
const connectDB = require('./config');
connectDB();
const apiRoute = require('./Routes/api');

app.use(express.json());
app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening on Port ${server.address().port}`));