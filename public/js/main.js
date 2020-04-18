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

// Notifer
function notify(msg, t) {
    if (t == 1) {
        $('#notification').html("<h6>" + msg + "</h6>").removeClass('w3-red').addClass('w3-green').fadeIn(200).delay(1000).fadeOut(200);
    }

    if (t == 2) {
        $('#notification').html("<h6>" + msg + "</h6>").removeClass('w3-green').addClass('w3-red').fadeIn(200).delay(1000).fadeOut(200);
    }
}