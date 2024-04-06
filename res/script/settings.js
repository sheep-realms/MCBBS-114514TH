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
        title: '[闲聊] 如何看待阿b再砍创作激励？',
        description: '阿b大家都很清除，那么阿b再砍创作激励是怎么一回事呢？在评论区说说你的看法。',
        author: '麦块看世界',
        createdAt: '2207/08/20 24:52'
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