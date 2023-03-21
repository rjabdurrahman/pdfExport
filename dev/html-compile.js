const fs = require('fs');
const config = require('./html-config.json');
let importsRegx = /{{<.+}}$/gm
let html = '';
let dir = config.rootDir;
fs.readFile(dir + 'info22.hbs', 'UTF-8', (err, text) => {
    if (err) console.log(err.message)
    html = text
    for (e of text.match(importsRegx)) {
        let text = fs.readFileSync(dir + e.replace('{{<', '').replace('}}', ''), { encoding: 'utf8' });
        html = html.replace(e, text);
    }
    fs.writeFile(config.outDir + 'info22.html', html, err => {
        if (err) console.log(err.message)
        else console.log('HTML Compiled');
    });
});