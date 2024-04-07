"use strict";

let lsm = new LocalStorageManager('mcbbs-114514th');

$(document).ready(function() {
    let loggedUser = lsm.getItem('logged_user');
    if (loggedUser?.username == undefined) {
        $('.thread-title').text('请先登录再阅读主题');
        $('.thread-content').html('<p>你当前尚未登录。为了方便您享受更好的服务，请您登录账号。</p><p><a href="login.html">登录</a> | <a href="index.html">返回首页</a></p>');
        return;
    }

    const id = EchoLiveTools.getUrlParam('id');

    if (id <= 10079428) {
        $('.thread-title').text('主题过于新鲜已被锁定');
        $('.thread-content').html('<p>你访问的主题因过于新鲜已被锁定，并且目前没有填埋卡可以使用。</p><p><a href="index.html">返回首页</a></p>');
        return;
    }

    const threadsDB = lsm.getItem('threads');
    const threads = threadsDB.filter((e) => {
        return e.id == id;
    });

    let thread;

    if (threads.length <= 0) {
        $('.thread-title').text('主题不存在');
        $('.thread-content').html('<p>你访问的主题不存在或已被删除，请检查您的链接。</p><p><a href="index.html">返回首页</a></p>');
        return;
    }
    if (threads.length > 0) thread = threads[0];

    if (thread.author != loggedUser?.username) {
        $('.thread-title').text('主题正在审核中');
        $('.thread-content').html('<p>你访问的主题正在审核中，请稍后再来。</p><p><a href="index.html">返回首页</a></p>');
        return;
    }

    $('.thread-title').text(`[${db_category[thread.category]}] ${thread.title}`);
    $('.thread-content').html(SettingsPanel.msgBoxWarn('主题审核中', '<p>这只是一个预览，不是主题的最终展示效果。您的主题仍在审核中，请耐心等待！</p><p><a href="index.html">返回首页</a></p>') + '<div style="margin-top: 1rem;">' + thread.content + '</div>');
});