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
    const eula1 = Number($('#eula-1').val());
    const eula2 = Number($('#eula-2').val());
    const eula3 = Number($('#eula-3').val());
    const eula4 = Number($('#eula-4').val());
    const eula5 = Number($('#eula-5').val());
    const eula6 = Number($('#eula-6').val());

    if (username == '') return loginError('用户名不能为空！');
    if (password == '') return loginError('密码不能为空！');
    if (password.length < 8) return loginError('密码不能少于8位！');
    if (password.length > 32) return loginError('密码不能大于32位！');
    if (password.search(pwreg) == -1) return loginError('密码应包含大写、小写英文字母和数字！');
    if (password != password2) return loginError('两次密码输入不一致！');
    if (eula1 != 1) return loginError('您必须同意《MCBBS用户许可协议》才能注册！');
    if (eula2 != 1) return loginError('您必须同意《MCBBS隐私政策》才能注册！');
    if (eula3 != 1) return loginError('您必须同意《个性化广告政策》才能注册！');
    if (eula4 != 1) return loginError('您必须同意《大数据模型训练政策》才能注册！');
    if (eula5 != 1) return loginError('您必须同意《生物特征数据收集政策》才能注册！');
    if (eula6 != 1) return loginError('您必须同意《用户创作内容著作权政策》才能注册！');


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