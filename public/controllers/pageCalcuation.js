function pageCalculation() {
    $(sel('3d26,3d27')).keyup(function(e) {
        let v = Number($(sel('3d26')).val().replace(',', '.')) / Number($(sel('3d27')).val().replace(',', '.')) * 100;
        $(sel('3d28')).val(v);
    })
    $(sel('13d1301,13d1302,13d1304,13d1305,13d1307,13d1308,13d1311,13d1312,14d1471,15d1501,15d1502,15d1526,15d1527,15d1551,15d1552')).keyup(function (e) {
        valueCal(['13d1303', '13d1306', '13d1309', '13d1313', '14d1471', '15d1503', '15d1528', '15d1551', '15d1552'], [], '15d1553');
        // ,14d1471,15d1501,15d1502,15d1525,15d1526,15d1549,15d1550
    });
}

function sel(str) {
    return '[name=' + str.replace(/,/g, '],[name=') + ']';
}