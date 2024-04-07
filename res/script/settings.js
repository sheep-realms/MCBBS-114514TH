"use strict";

let lsm = new LocalStorageManager('mcbbs-114514th');

let isLogged = false;

$(document).ready(function() {
    const tabHeight = $('#echo-editor-nav').height();
    $('.settings-nav').css('top', `${tabHeight + 17}px`);
    $('.thread-header').css('top', `${tabHeight}px`);

    $('#index-nav').html(SettingsPanel.nav(indexNav));
    $('.settings-nav-item').eq(0).click();

    $('#index-content').html(`<div class="thread-header">
        <div class="thread-header-title"></div>
        <div class="thread-header-action">
            ${ EditorForm.button(
                '发帖',
                {
                    id: 'btn-new-thread'
                }
            ) }
        </div>
    </div>` + SettingsPanel.setItems(indexContent));

    let loggedUser = lsm.getItem('logged_user');
    if (loggedUser?.username != undefined) {
        isLogged = true;
        $('.user-panel').html(`您好，${ loggedUser.username } | <a href="logout.html">退出</a>`);
    }
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

$(document).on('click', '#btn-new-thread', function() {
    if (isLogged) {
        goto('new-thread.html');
    } else {
        goto('login.html');
    }
});

$(document).on('click', '.settings-item', function() {
    let id = $(this).data('id');
    goto('thread.html?id=' + id);
});




$(window).resize(function() {
    const tabHeight = $('#echo-editor-nav').height();
    $('.settings-nav').css('top', `${tabHeight + 17}px`);
    $('.thread-header').css('top', `${tabHeight}px`);
});