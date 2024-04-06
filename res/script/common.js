function loginMsg(msg) {
    $('#login-msg').removeClass('error ok');
    $('#login-msg').text(msg);
}

function loginError(msg) {
    $('#login-msg').removeClass('error ok');
    $('#login-msg').addClass('error');
    $('#login-msg').text(msg);
}

function loginOK(msg) {
    $('#login-msg').removeClass('error ok');
    $('#login-msg').addClass('ok');
    $('#login-msg').text(msg);
}

function goto(url) {
    window.location.href = url;
}