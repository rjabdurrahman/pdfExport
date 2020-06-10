const fs = require('fs');
let importsRegx = /{{<.+}}$/gm
let html = '';
fs.readFile('info.html', 'UTF-8', (err, text) => {
    if (err) console.log(err.message)
    html = text
    for (e of text.match(importsRegx)) {
        let text = fs.readFileSync(e.replace('{{<', '').replace('}}', ''), { encoding: 'utf8' });
        html = html.replace(e, text);
    }
    fs.writeFile('info.html', html, err => {
        if(err) console.log(err.message)
        else console.log('HTML Compiled');
    });
});