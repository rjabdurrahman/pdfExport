function isSaveAlive(val) {
    document.querySelector('#submitInfoBtn').disabled = !val;
}

if (!location.href.includes('/info')) localStorage.setItem('activePage', 1);
$('a').click(function () {
    console.log('clicked')
    if (!location.href.includes('/info')) localStorage.activePage = 1;
});

function $print(data) {
    console.log(data);
}

function $js(id) {
    return document.getElementById(id);
}

function $sn(name) {
    return document.getElementsByName(name);
}

function lsSet(vname, data) {
    localStorage.setItem(vname, data);
}

function lsSetJ(vname, data) {
    localStorage.setItem(vname, JSON.stringify(data));
}

function lsGet(vname) {
    return localStorage.getItem(vname);
}

function lsGetJ(vname) {
    return JSON.parse(localStorage.getItem(vname));
}

function lsExGJInit(vname, data) {
    return lsGet(vname) ? lsGetJ(vname) : data;
}

function clearForm(target) {
    console.log('clear')
    $(target + ' input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(target + ' input:checkbox').prop('checked', false);
}

var activeClientId = '';

// Notifer
function notify(msg, t) {
    if (t == 1) {
        $('#notification').html(`<div class="contain">
        <span class="material-icons">
            check_circle
        </span>
        <h6>${msg}</h6>
    </div>`).removeClass('error').addClass('success').fadeIn(200).delay(1000).fadeOut(200);
    }

    if (t == 2) {
        $('#notification').html(`<div class="contain">
        <span class="material-icons">
            check_circle
        </span>
        <h6>${msg}</h6>
    </div>`).removeClass('success').addClass('error').fadeIn(200).delay(1000).fadeOut(200);
    }
}

// Checker
function getChValue(val) {
    return val ? 'Yes' : 'Off';
}