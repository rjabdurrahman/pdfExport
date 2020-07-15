function isSaveAlive (val) {
  document.querySelector('#submitInfoBtn').disabled = !val
}

if (!location.href.includes('/info')) localStorage.setItem('activePage', 1)
$('a').click(function () {
  localStorage.activePage = 1
});

function valueCal (adds, subs, result) {
  let res = 0
  let ec = ''
  adds.forEach(x => {
    ec += $(`[name=${x}]`).val()
    res += Number($(`[name=${x}]`).val())
  })
  subs.forEach(x => {
    ec += $(`[name=${x}]`).val()
    res -= Number($(`[name=${x}]`).val())
  })
  if (ec) $(`[name=${result}]`).val(res)
  else $(`[name=${result}]`).val('')
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
  console.log('clear')
  $(target + ' input')
    .not(':button, :submit, :reset, :hidden, :checkbox, :radio')
    .val('')
  $(target + ' input:checkbox').prop('checked', false)
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
