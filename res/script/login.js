"use strict";

let lsm = new LocalStorageManager('mcbbs-114514th');

$(document).ready(function() {
    let loggedUser = lsm.getItem('logged_user');
    if (loggedUser?.username != undefined) goto('index.html');
});

$(document).on('click', '#btn-login', function() {
    const username = $('#ipt-username').val();
    const password = $('#ipt-password').val();

    if (username == '') return loginError('用户名不能为空！');
    if (password == '') return loginError('密码不能为空！');

    const userDB = lsm.getItem('users');

    loginMsg('登录中...');

    setTimeout(function() {
        if (!Array.isArray(userDB)) return loginError('用户名或密码错误！');

        let u = userDB.filter((e) => {
            return e.username == username;
        });

        if (u.length <= 0 || u[0].password != md5(password)) return loginError('用户名或密码错误！');

        lsm.setItem('logged_user', {
            username: username
        });

        loginOK('登录成功！');
        setTimeout(function() {
            goto('index.html')
        }, 1000);
    }, 750);
});

$(document).on('click', '#btn-register', function() {
    goto('register.html');
});