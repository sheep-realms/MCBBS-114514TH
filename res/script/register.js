"use strict";

let lsm = new LocalStorageManager('mcbbs-114514th');

$(document).ready(function() {
    let loggedUser = lsm.getItem('logged_user');
    if (loggedUser?.username != undefined) goto('index.html');
});

$(document).on('click', '#btn-register', function() {
    const pwreg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\x20-\x7E]{8,32}$/;
    const username = $('#ipt-username').val();
    const password = $('#ipt-password').val();
    const password2 = $('#ipt-password-2').val();

    if (username == '') return loginError('用户名不能为空！');
    if (password == '') return loginError('密码不能为空！');
    if (password.length < 8) return loginError('密码不能少于8位！');
    if (password.length > 32) return loginError('密码不能大于32位！');
    if (password.search(pwreg) == -1) return loginError('密码应包含大写、小写英文字母和数字！');
    if (password != password2) return loginError('两次密码输入不一致！');

    let userDB = lsm.getItem('users');

    if (!Array.isArray(userDB)) userDB = [];

    loginMsg('注册中...');

    setTimeout(function() {
        let u = userDB.filter((e) => {
            return e.username == username;
        });

        if (u.length > 0) return loginError('该用户名已被注册！');

        userDB.push({
            username: username,
            password: md5(password)
        });

        lsm.setItem('users', userDB);

        loginOK('注册成功！');
        setTimeout(function() {
            goto('login.html')
        }, 1500);
    }, 750);
});

$(document).on('click', '#btn-login', function() {
    goto('login.html');
});