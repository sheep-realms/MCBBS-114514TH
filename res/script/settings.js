"use strict";

const indexNav = [
    {
        id: 'chat',
        icon: 'tea'
    }, {
        id: 'art',
        icon: 'glassCocktail'
    }, {
        id: 'news',
        icon: 'newspaper'
    }, {
        id: 'help',
        icon: 'help'
    }, {
        id: 'tutorial',
        icon: 'school'
    }, {
        id: 'tutorial_server',
        icon: 'accountMultiple'
    }, {
        id: 'tutorial_mod',
        icon: 'cog'
    }, {
        id: 'peripherals',
        icon: 'puzzle'
    }, {
        id: 'feedback',
        icon: 'messageText'
    }
];

const indexContent = [
    {
        title: '[置顶] [公告] 我的世界中文论坛规章制度',
        description: '使用我的世界中文论坛的服务即代表您已阅读并无条件同意和遵守此规章制度',
        author: 'admin',
        createdAt: '2197/08/19 12:56'
    }, {
        title: '[闲聊] MCBBS 114514th 10岁生日快乐！',
        description: '不知不觉中 MCBBS 114514th 已经陪我们走过了10个年头，还记得上一次周年庆还是在上一次，眨眼间就来到了10周年。这几年大家都过得不容易，我想向各位 MCBBS 114514th 的管理人员和创作者们说一声：幸苦了！',
        author: '莉亚',
        createdAt: '2207/08/21 00:01'
    }, {
        title: '[闲聊] 做任务',
        description: '做个任务，发完就删11111111',
        author: '54563218795642@qq.c',
        createdAt: '2207/08/20 25:56'
    }, {
        title: '[讨论] 你喜欢玩创造模式还是生存模式',
        description: '我喜欢玩创造模式，你们呢？',
        author: 'MC小帅',
        createdAt: '2207/08/20 25:45'
    }, {
        title: '[美图] 好耶，是女装！',
        description: '[本帖包含隐藏内容]',
        author: '你的小猫呀',
        createdAt: '2207/08/20 25:37'
    }, {
        title: '[资讯] 悲报：隔壁 MCBBS 364364th 无限期维护了',
        description: '由于不可描述的原因，MCBBS 364364th 于半小时前宣布无限期维护，再次开放时间需要等后续公告',
        author: 'MCBBS 1919810th 官方',
        createdAt: '2207/08/20 25:33'
    }, {
        title: '[资讯] Minecraft 快照 207w34a 发布',
        description: '207w34a 是 Minecraft 1.1096 的第 15 个快照。本次快照主要更新了竖台阶、1/4 方块和 1/8 方块。本次更新将启动游戏所需 Java 版本从 59 提升至 62、所需操作系统从 128 位提升至 256 位，并修复了一些漏洞。',
        author: 'VVV',
        createdAt: '2207/08/20 25:26'
    }, {
        title: '[提问] 这个石头为什么挖不掉',
        description: '挖矿的时候挖到了这个黑黑的石头，挖了好长时间都没挖掉，到底要用什么工具才能挖啊？',
        author: '我是萌新',
        createdAt: '2207/08/20 25:17'
    }, {
        title: '[闲聊] 举办滥权版主',
        description: '这个版主天天删我帖子，我发一个他删一个，是不是生活过得不如意了来网上刷存在感？',
        author: '飞翔的史蒂夫',
        createdAt: '2207/08/20 25:12'
    }, {
        title: '[闲聊] 好好好，终于有竖半砖了',
        description: '麻将终于知道玩家想要什么了，新版本不仅加入了竖半砖，还加入了小方块！',
        author: 'Hibiki',
        createdAt: '2207/08/20 25:09'
    }, {
        title: '[闲聊] 新人报道',
        description: '玩了很久mc，今天才知道有这么个论坛',
        author: '蓝天上的可爱MCHBK08母舰',
        createdAt: '2207/08/20 25:04'
    }, {
        title: '[讨论] 这个签到系统什么毛病',
        description: '10级以下不能签到也就算了，连续签到不按天算而是按26小时算是谁想出来的？',
        author: '你大爷',
        createdAt: '2207/08/20 24:57'
    }, {
        title: '[闲聊] 都7022年了怎么还有大聪明用Safari浏览器',
        description: '来看看这位大聪明用Safari内核的浏览器访问论坛，这种两百年前的垃圾浏览器早该淘汰了！',
        author: '酒吧里点炒饭的测试工程师',
        createdAt: '2207/08/20 24:56'
    }, {
        title: '[闲聊] 如何看待阿b再砍创作激励？',
        description: '阿b大家都很清除，那么阿b再砍创作激励是怎么一回事呢？在评论区说说你的看法。',
        author: '麦块看世界',
        createdAt: '2207/08/20 24:52'
    }, {
        title: '[提问] Bat Happy Mod是什么mod？',
        description: 'Bat Happy Mod是什么mod？为什么它会导致mc崩溃？我啥都没动mc就崩溃了',
        author: '我要玩等价交换',
        createdAt: '2207/08/20 24:48'
    }, {
        title: '[闲聊] 大家好啊，我是來自大陸北方的新人',
        description: '最近聽朋友介紹了這個社群，覺得很有意思，於是過來註冊了個帳號。新人有很多不懂的地方，還請大家多多指教！',
        author: '鳳梨',
        createdAt: '2207/08/20 24:43'
    }, {
        title: '[提问] 为什么 Safari 内核的浏览器加载不了这个网站？',
        description: '虽然这个浏览器已经很旧了，但是难道不能兼容一下吗？',
        author: '哈基米',
        createdAt: '2207/08/20 24:40'
    }, {
        title: '[闲聊] 大家觉得1.1096还会出哪些新内容呢？',
        description: '如题',
        author: '15465sdf',
        createdAt: '2207/08/20 24:32'
    }, {
        title: '[讨论] 刚注册5分钟的账号破坏百科首页，10分钟被撤销，rpg是吧',
        description: '隔壁百毒百科都花了5个小时的时间撤销破坏，你wiki 5分钟之内就被撤销了，还顶着个迷你的头像，2小时后tabtab上文章就发出来了，这一串事情连起来我是不信这是巧合的。',
        author: '〇〇，启动！',
        createdAt: '2207/08/20 24:29'
    }, {
        title: '[闲聊] 怎么会有人连复制粘贴都不会啊',
        description: '家人们，谁懂啊！今天在群里遇到个笨比，让他解压文件，他给我在线解压。让他复制粘贴，他问我什么是复制粘贴。让他右键，他问我右键在哪。他真的，我哭死。',
        author: 'hust',
        createdAt: '2207/08/20 24:22'
    }, {
        title: '[讨论] 考古过程中遇到点问题',
        description: '有个旧版本需要 Java 7 才能运行，我网上找了半天没找到，谁能发我一个？',
        author: 'LocusAzur',
        createdAt: '2207/08/20 24:13'
    }, {
        title: '[闲聊] 晚安',
        description: '该睡觉了，大家晚安！',
        author: '晚安BOT',
        createdAt: '2207/08/20 24:00'
    }, {
        title: '[闲聊] 为什么一个小时只能发3个帖子',
        description: '哼哼，啊啊啊啊啊啊啊啊',
        author: 'sodayo',
        createdAt: '2207/08/20 23:53'
    }, {
        title: '[闲聊] 哼哼，啊啊啊啊啊啊啊啊啊啊',
        description: '你是一个一个一个论坛啊啊啊啊啊',
        author: 'sodayo',
        createdAt: '2207/08/20 23:51'
    }, {
        title: '[美食] 做了个蛋炒饭',
        description: '非常的新鲜，非常的美味',
        author: 'sodayo',
        createdAt: '2207/08/20 23:50'
    }, {
        title: '[闲聊] [BBSPK] 新興のマインクラフト論壇晉級賽 [Chinese][Digital]',
        description: '[本帖包含隐藏内容]',
        author: 'nimda',
        createdAt: '2207/08/20 23:47'
    }, {
        title: '[闲聊] eeeeeeee',
        description: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        author: 'E道阳光',
        createdAt: '2207/08/20 23:42'
    }, {
        title: '[闲聊] MCBBS有你更精彩！',
        description: 'MCBBS有你更精彩！MCBBS有你更精彩！MCBBS有你更精彩！',
        author: 'aiuhdiaus',
        createdAt: '2207/08/20 23:40'
    }
];


$(document).ready(function() {
    $('#index-nav').html(SettingsPanel.nav(indexNav));
    $('.settings-nav-item').eq(0).click();

    $('#index-content').html(SettingsPanel.setItems(indexContent));
});



$(document).on('click', '.settings-nav-item', function() {
    $(this).parent().children().attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
    const pageid = $(this).data('pageid');
    $(`.settings-page`).addClass('hide');
    $(`.settings-page[data-pageid="${pageid}"]`).removeClass('hide');
});

$(document).on('click', '.settings-switch', function() {
    const $parent = $(this).parents('.settings-item').eq(0);
    const name = $parent.data('id');
    const defaultValue = $(this).children('.settings-switch-value').data('default');
    const defaultValueTrue = getSettingsItemValue(name, true);
    const t = [
        ['off', false, 0],
        ['on',  true,  1]
    ];
    let next = 0;
    let isBit = $(this).data('is-bit');
    if (isBit == undefined) isBit = 0;
    if ($(this).hasClass('state-off')) next = 1;
    let value = t[next][1 + isBit];

    $(this).children('.settings-switch-value').val(value);
    $(this).removeClass('state-off state-on');
    $(this).addClass('state-' + t[next][0]);
    $(this).children('.btn-' + t[next][0]).focus();

    if ($parent.data('type') == 'special.all_or_array_string') {
        // debugger
        if (next == 1) {
            $parent.find('.content').addClass('hide');
        } else {
            $parent.find('.content').removeClass('hide');
        }
    }

    if (Array.isArray(defaultValueTrue)) {
        let v1 = getSettingsItemValue(name);
        let v2 = defaultValueTrue;
        if (Array.isArray(v1)) v1 = v1.join('\n');
        if (Array.isArray(v2)) v2 = v2.join('\n');
        if (v1 != v2) {
            $parent.addClass('change');
        } else {
            $parent.removeClass('change');
        }
    } else if (value != defaultValue) {
        $parent.addClass('change');
    } else {
        $parent.removeClass('change');
    }
    configChangeCheck();
});