var clientsCopy = [];
function isSaveAlive (val) {
  document.querySelector('#submitInfoBtn').disabled = !val
}

if (!/\/(2021|2020|2019)\?id/.test(location.href)) localStorage.setItem('activePage', 1)
$('a').click(function () {
  localStorage.activePage = 1
});

function filterValue(fName) {
  let strVal = $(`[name=${fName}]`).not(':disabled').val();
  if(/\d*\.\d{0,2}$/.test(strVal)) return strVal.split('.')[0].replace(/\./g, '') + '.' + strVal.split('.')[1];
  else return strVal.replace(/\./g, '').replace(',', '.');
}

function valueCal (adds, subs, result) {
  let res = 0
  let ec = ''
  adds.forEach(x => {
    ec += $(`[name=${x}]`).val().replace(/\./g, '').replace(',', '.')
    res += Number(filterValue(x))
  })
  subs.forEach(x => {
    ec += $(`[name=${x}]`).val().replace(/\./g, '').replace(',', '.')
    res -= Number(filterValue(x))
  })
  if(result == '16d1653') {
    res += Number(filterValue('15d1553')) > Number(filterValue('15d1554')) ? Number(filterValue('15d1553')) : Number(filterValue('15d1554'))
  }
  if (ec || (result == '16d1653' && ($(`[name=15d1553]`).val() || $(`[name=15d1554]`).val()))) {
    let strRes = (Math.round( res * 100 ) / 100).toFixed(2).toString();
    if(/^[-]*\d*\.[0]{2}$/g.test(strRes)) $(`[name=${result}]`).val(frNumber(strRes) + ',00')
    else if(/^[-]*\d*\.\d[0]{1}/g.test(strRes)) $(`[name=${result}]`).val(frNumber(strRes) + '0')
    else if(/^[-]*\d*\.\d\d/g.test(strRes)) $(`[name=${result}]`).val(frNumber(strRes))
  }
  else $(`[name=${result}]`).val('');
  isSaveAlive(true);
}

function frNumber(val) {
  return Number(val.replace(',','.')).toLocaleString('fr-FR').replace(/\s/g, '.')
}

// Restricts input for the set of matched elements to the given inputFilter function.
(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));

function $print (data) {
  console.log(data)
}

function $js (id) {
  return document.getElementById(id)
}

function $sn (name) {
  return document.getElementsByName(name)
}

function lsSet (vname, data) {
  localStorage.setItem(vname, data)
}

function lsSetJ (vname, data) {
  localStorage.setItem(vname, JSON.stringify(data))
}

function lsGet (vname) {
  return localStorage.getItem(vname)
}

function lsGetJ (vname) {
  return JSON.parse(localStorage.getItem(vname))
}

function lsExGJInit (vname, data) {
  return lsGet(vname) ? lsGetJ(vname) : data
}

function clearForm (target) {
  $(target + ' input')
    .not('.not-refresh, :button, :submit, :reset, :hidden, :checkbox, :radio')
    .val('')
  $(target + ' input:checkbox').prop('checked', false)
  $(target + ' input:radio').prop('checked', false)
  $(target + ' textarea').val('');
  $(target + ' select').prop('selectedIndex',0);
}

var activeClientId = ''

// Notifer
function notify (msg, t) {
  if (t == 1) {
    $('#notification')
      .html(
        `<div class="contain">
        <span class="material-icons">
            check_circle
        </span>
        <h6>${msg}</h6>
    </div>`
      )
      .removeClass('error')
      .addClass('success')
      .fadeIn(200)
      .delay(1000)
      .fadeOut(200)
  }

  if (t == 2) {
    $('#notification')
      .html(
        `<div class="contain">
        <span class="material-icons">
            check_circle
        </span>
        <h6>${msg}</h6>
    </div>`
      )
      .removeClass('success')
      .addClass('error')
      .fadeIn(200)
      .delay(1000)
      .fadeOut(200)
  }
}

// Checker
function getChValue (val) {
  return val ? 'Yes' : 'Off'
}
