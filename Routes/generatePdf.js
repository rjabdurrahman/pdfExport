const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");
const Client = require('../Models/Client');
let pdfMapping19 = require('../assets/pdfMapping19');
let pdfMapping20 = require('../assets/pdfMapping20');
let pdfMapping21 = require('../assets/pdfMapping21');
let fdfText19 = require('../pdf/fdfText19');
let fdfText20 = require('../pdf/fdfText20');
let fdfText21 = require('../pdf/fdfText21');

module.exports = (req, res) => {
    let id = req.params.id;
    let year = req.params.year;
    let lang = req.params.lang;
    let pdfFile = '';
    if (year == 2019) {
        if(lang == 'fr') pdfFile = '2019_editable.pdf';
        else if(lang == 'de') pdfFile = '100D_editable_2019.pdf';
    }
    else if (year == 2020) {
        if(lang == 'fr') pdfFile = '100F_editable_2020.pdf';
        else if(lang == 'de') pdfFile = '100D_editable_2020.pdf';
    }
    else if (year == 2021) {
        if(lang == 'fr') pdfFile = '100F_editable_2021.pdf';
        else if(lang == 'de') pdfFile = '100D_editable_2021.pdf';
    }
    Client.findById(id, (err, client) => {
        if (err) res.send(err)
        else {
            let mappedData = '';
            let newFdfTxt = '';
            if (year == 2019) {
                mappedData = pdfMapping19(client._doc['y' + year]);
                newFdfTxt = fdfText19 + '';
            }
            else if (year == 2020) {
                mappedData = pdfMapping20(client._doc['y' + year]);
                newFdfTxt = fdfText20 + '';
            }
            else if (year == 2021) {
                mappedData = pdfMapping21(client._doc['y' + year]);
                newFdfTxt = fdfText21 + '';
            }
            for (f in mappedData) {
                newFdfTxt = newFdfTxt.replace(new RegExp(f, 'g'), mappedData[f]);
            }
            // return res.send(newFdfTxt)
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