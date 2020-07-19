function pageCalculation() {
    $(sel('13d1301,13d1302,13d1303,13d1304,13d1305,13d1306,13d1311,13d1312,14d1471,15d1501,15d1502,15d1525,15d1526,15d1549,15d1550')).keyup(function (e) {
        console.log('Keyup')
    })
}

function sel(str) {
    return '[name=' + str.replace(/,/g, '],[name=') + ']';
}