let lsm = new LocalStorageManager('mcbbs-114514th');

lsm.setItem('logged_user', {});

setTimeout(function() {
    goto('index.html');
}, 3000)