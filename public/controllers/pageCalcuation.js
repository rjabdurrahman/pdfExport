function sel (str) {
  return '[name=' + str.replace(/,/g, '],[name=') + ']'
}

function pageCalculation () {
  $(sel('3d26,3d27')).keyup(function (e) {
    if (!$(sel('3d26')).val() || !$(sel('3d27')).val()) {
      $(sel('3d28')).val('')
      return
    }
    let v =
      (Number(
        $(sel('3d26'))
          .val()
          .replace(',', '.')
      ) /
        Number(
          $(sel('3d27'))
            .val()
            .replace(',', '.')
        )) *
      100
    if (v && v != Infinity)
      $(sel('3d28')).val(
        v
          .toFixed(2)
          .toString()
          .replace('.', ',')
      )
  })
  $(
    sel(
      '13d1301,13d1302,13d1304,13d1305,13d1307,13d1308,13d1311,13d1312,14d1471,15d1501,15d1502,15d1526,15d1527,15d1551,15d1552'
    )
  ).keyup(function (e) {
    dependedValCal()
  })
  $(
    sel(
      '15d1554,16d1605,16d1606,16d1611,16d1612,16d1617,16d1618,16d1620,16d1621,16d1623,16d1624,16d1644,16d1645,16d1647,16d1648'
    )
  ).keyup(function (e) {
    dependedValCal()
  })
}

function dependedValCal () {
  valueCal(
    [
      '13d1303',
      '13d1306',
      '13d1309',
      '13d1313',
      '14d1471',
      '15d1503',
      '15d1528',
      '15d1551',
      '15d1552'
    ],
    [],
    '15d1553'
  );
  valueCal(
    [
      '16d1605',
      '16d1606',
      '16d1611',
      '16d1612',
      '16d1617',
      '16d1618',
      '16d1620',
      '16d1621',
      '16d1623',
      '16d1624',
      '16d1644',
      '16d1645',
      '16d1647',
      '16d1648'
    ],
    [],
    '16d1653'
  )
}
