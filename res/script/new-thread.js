"use strict";

let lsm = new LocalStorageManager('mcbbs-114514th');

function submitMsg(msg) {
    $('#new-thread-msg').removeClass('error ok');
    $('#new-thread-msg').text(msg);
}

function submitError(msg) {
    $('#new-thread-msg').removeClass('error ok');
    $('#new-thread-msg').addClass('error');
    $('#new-thread-msg').text(msg);
}

function submitOK(msg) {
    $('#new-thread-msg').removeClass('error ok');
    $('#new-thread-msg').addClass('ok');
    $('#new-thread-msg').text(msg);
}

$(document).ready(function() {
    let loggedUser = lsm.getItem('logged_user');
    if (loggedUser?.username == undefined) goto('login.html');
});

$(document).on('click', '#btn-new-thread-submit', function() {
    const category = $('#category').val();
    const title = $('#title').val();
    const content = $('#content').val();

    if (title == '') return submitError('请填写标题！');
    if (title.length > 60) return submitError('标题过长！');
    if (content == '') return submitError('请填写正文！');
    if (content.length < 10) return submitError('正文内容过短！');
    if (content.length > 100000) return submitError('正文内容过长！');

    let threadsDB = lsm.getItem('threads');
    let threadCount = lsm.getItem('db_thread_count');
    let loggedUser = lsm.getItem('logged_user');
    submitMsg('发布中...');

    setTimeout(function() {
        threadCount++;
        threadsDB.push({
            id: threadCount,
            forum: 1,
            category: category,
            title: title,
            content: content,
            author: loggedUser.username
        });

        lsm.setItem('db_thread_count', threadCount);
        lsm.setItem('threads', threadsDB);

        submitOK('发布成功！请等待管理员审核。');

        setTimeout(function() {
            goto('thread.html?id=' + threadCount);
        }, 2000);
    }, 2500);
});