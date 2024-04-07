let __lsm = new LocalStorageManager('mcbbs-114514th');

let __db_users_join = __lsm.getItem('db_users_join');

if (__db_users_join == undefined) {
    let __db_users = __lsm.getItem('users');

    if (!Array.isArray(__db_users)) __db_users = [];

    db_users.forEach(e => {
        __db_users.push({
            username: e,
            password: ''
        });
    });

    __lsm.setItem('users', __db_users);
    __lsm.setItem('db_users_join', true);
}

let __db_thread_count = __lsm.getItem('db_thread_count');
if (__db_thread_count == undefined) __lsm.setItem('db_thread_count', 10079428);

let __db_threads = __lsm.getItem('threads');
if (__db_threads == undefined) __lsm.setItem('threads', []);



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