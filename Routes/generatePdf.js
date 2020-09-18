const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");
const Client = require('../Models/Client');
let serializeInfo = require('../assets/serializeInfo');
let fdfText = require('../pdf/fdfText');

module.exports = (req, res) => {
    let id = req.params.id;
    Client.findById(id, (err, client) => {
        if (err) res.send(err)
        else {
            let serialData = serializeInfo(client._doc);
            let newFdfTxt = fdfText + '';
            for (f in serialData) {
                newFdfTxt = newFdfTxt.replace(new RegExp(f, 'g'), serialData[f]);
            }
            fs.writeFile('./pdf/data_bind.fdf', newFdfTxt, 'binary', function (err) {
                if (err) res.send(err.message)
                else {
                    let prefix = '';
                    // if(process.platform != 'win32') prefix = 'chmod u+x /app/vendor/pdftk/bin/pdftk && ';
                    exec(`${prefix}pdftk ./pdf/2019_editable.pdf fill_form ./pdf/data_bind.fdf output ./pdf/client_files/abc.pdf`, (error, stdout, stderr) => {
                        if (error) {
                            res.send(`error: ${error.message}`);
                            return;
                        }
                        res.sendFile(path.resolve('./pdf/client_files/abc.pdf'));
                    });
                }
            });
        }
    });
}