const fs = require('fs');
const config = require('./html-config.json');
let importsRegx = /{{<.+}}$/gm
let html = '';
let dir = config.rootDir;
// New Year Modify
fs.readFile(dir + 'info24.hbs', 'UTF-8', (err, text) => {
    if (err) console.log(err.message)
    html = text
    for (e of text.match(importsRegx)) {
        let text = fs.readFileSync(dir + e.replace('{{<', '').replace('}}', ''), { encoding: 'utf8' });
        html = html.replace(e, text);
    }
    // New Year Modify
    fs.writeFile(config.outDir + 'info24.html', html, err => {
        if (err) console.log(err.message)
        else console.log('HTML Compiled');
    });
});