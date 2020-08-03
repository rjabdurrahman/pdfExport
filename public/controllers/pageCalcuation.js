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
  $('.form-input input')
    .not(':disabled')
    .keypress(function (e) {
      grandCalculation();
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
  )
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

function grandCalculation() {
  valueCal(
    [
      '5d34',
      '5d70',
      '6d50',
      '7d759',
      '8d841',
      '9d935',
      '10d1029',
      '11d1129'
    ],
    [],
    '20d2033'
  )
  valueCal(
    [
      '5d35',
      '5d71',
      '6d51',
      '7d760',
      '8d842',
      '9d936',
      '10d1030',
      '11d1130'
    ],
    [],
    '20d2034'
  )
  valueCal(
    [
      '5d36',
      '5d72',
      '6d52',
      '7d761',
      '8d843',
      '9d938',
      '10d1032',
      '11d1132'
    ],
    [],
    '20d2035'
  )
  valueCal(
    [
      '5d37',
      '5d73',
      '6d53',
      '7d762',
      '8d844',
      '9d939',
      '10d1033',
      '11d1133'
    ],
    [],
    '20d2036'
  )
  valueCal(
    [
      '20d2033',
      '20d2034',
      '16d1653'
    ],
    [],
    '20d2038'
  )
}
