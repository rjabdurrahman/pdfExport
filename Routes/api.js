const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");
const Client = require('../Models/Client');
let ObjectID = require('mongodb').ObjectID;
let serializeInfo = require('../assets/serializeInfo');
let fdfText = require('../pdf/fdfText');
let client = require('../assets/client');
let page1 = require('../assets/page1');
let page2 = require('../assets/page2');
let page3 = require('../assets/page3');
let page4 = require('../assets/page4');
let page5 = require('../assets/page5');
let page6 = require('../assets/page6');

router.get('/', (req, res) => {
    res.send('API is live');
})
// Adding new client.......
router.post('/addclient', (req, res) => {
    let idf = req.body;
    client.signaletique.contribuable.nom = idf.nom;
    client.signaletique.contribuable.prenom = idf.prenom;
    client.signaletique.contribuable.courriel = idf.courriel;
    client.signaletique.contribuable.telephone = idf.telephone;
    var clients = new Client(client);
    clients.save();
    res.send({ success: 'Client Added Successfully' });
});
//client info update
router.post('/infoupdate/:id', (req, res) => {
    let id = req.params.id;
    let info = {};
    console.log(req.body)
    req.body.forEach(x => info[x.name] = x.value);
    let data = { ...page1(info), ...page2(info), ...page3(info), ...page4(info), ...page5(info), ...page6(info) };
    console.log(data)
    Client.findOneAndUpdate({ "_id": ObjectID(id) }, data, { upsert: true }, (err, result) => {
        if (err) res.send(err)
        else res.send(result)
    });
});

// client delete
router.post('/delete/:id', (req, res) => {
    let id = req.params.id;
    Client.remove({ "_id": ObjectID(id) }, (err, result) => {
        if (err) res.send({ err: err.message });
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

router.get('/pdftest', (req, res) => {
    exec("chmod u+x /app/vendor/pdftk/bin/pdftk && pdftk", (error, stdout, stderr) => {
        if (error) {
            res.send(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            res.send(`stderr: ${stderr}`);
            return;
        }
        res.send(`stdout: ${stdout}`);
    });
});

// Genterate PDF
router.get('/pdf/:id', (req, res) => {
    let id = req.params.id;
    Client.findById(id, (err, client) => {
        if (err) res.send(err)
        else {
            let serialData = serializeInfo(client._doc);
            for (f in serialData) {
                fdfText = fdfText.replace(f, serialData[f]);
            }
            fs.writeFile('./pdf/data_bind.fdf', fdfText, 'utf8', function (err) {
                if (err) res.send(err.message)
                else {
                    exec(`chmod u+x /app/vendor/pdftk/bin/pdftk && pdftk ./pdf/2019.pdf fill_form ./pdf/data_bind.fdf output ./pdf/client_files/abc.pdf`, (error, stdout, stderr) => {
                        if (error) {
                            res.send(`error: ${error.message}`);
                            return;
                        }
                        // if (stderr) {
                        //     res.send(`stderr: ${stderr}`);
                        //     return;
                        // }
                        // res.send(`stdout: ${stdout}`);
                        res.sendFile(path.resolve('./pdf/client_files/abc.pdf'));
                    });
                }
            });
        }
    });
})

module.exports = router;