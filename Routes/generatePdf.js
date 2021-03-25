const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");
const Client = require('../Models/Client');
let pdfMapping19 = require('../assets/pdfMapping19');
let pdfMapping20 = require('../assets/pdfMapping20');
let fdfText = require('../pdf/fdfText');

module.exports = (req, res) => {
    let id = req.params.id;
    let year = req.params.year;
    let pdfFile = '';
    if (year == 2019) pdfFile = '2019_editable.pdf';
    else if (year == 2020) pdfFile = '100F_editable_2020.pdf';
    Client.findById(id, (err, client) => {
        if (err) res.send(err)
        else {
            let mappedData = '';
            if (year == 2019) {
                mappedData = pdfMapping19(client._doc['y' + year]);
            }
            else if (year == 2020) {
                mappedData = pdfMapping20(client._doc['y' + year]);
            }
            let newFdfTxt = fdfText + '';
            for (f in mappedData) {
                newFdfTxt = newFdfTxt.replace(new RegExp(f, 'g'), mappedData[f]);
            }
            fs.writeFile('./pdf/data_bind.fdf', newFdfTxt, 'binary', function (err) {
                if (err) res.send(err.message)
                else {
                    let prefix = '';
                    // if(process.platform != 'win32') prefix = 'chmod u+x /app/vendor/pdftk/bin/pdftk && ';
                    exec(`${prefix}pdftk ./pdf/${pdfFile} fill_form ./pdf/data_bind.fdf output ./pdf/client_files/abc.pdf`, (error, stdout, stderr) => {
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