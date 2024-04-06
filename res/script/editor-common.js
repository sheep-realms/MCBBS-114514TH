"use strict";

// 本地化
let $i18n = $('*[data-i18n]');
for (let i = 0; i < $i18n.length; i++) {
    const e = $i18n.eq(i);
    const key = e.data('i18n');
    e.text($t(key));
}
$i18n = $('*[data-i18n-title]');
for (let i = 0; i < $i18n.length; i++) {
    const e = $i18n.eq(i);
    const key = e.data('i18n-title');
    e.attr('title', $t(key));
}
$i18n = $('*[data-i18n-aria-label]');
for (let i = 0; i < $i18n.length; i++) {
    const e = $i18n.eq(i);
    const key = e.data('i18n-aria-label');
    e.attr('aria-label', $t(key));
}


let timer = {
    clickEffect: -1
}

let checkboxEvent = {};

/**
 * 设置表单元素默认值
 * @param {String} $sel 选择器
 * @param {String|Number} value 值
 */
function setDefaultValue($sel, value) {
    $($sel).data('default', value);
    $($sel).val(value);
}

/**
 * 设置复选框默认状态
 * @param {String} $sel 选择器
 * @param {0|1} value 值
 */
function setCheckboxDefaultValue($sel, value) {
    if (typeof value === 'boolean') value ? value = 1 : value = 0;

    $($sel).val(value);
    if (value == 1) {
        $($sel).parents('.checkbox').attr('aria-selected', 'true');
        $($sel).parents('.checkbox').addClass('selected');
    } else {
        $($sel).parents('.checkbox').attr('aria-selected', 'false');
        $($sel).parents('.checkbox').removeClass('selected');
    }
}


/**
 * 模拟点击
 * @param {String} $sel 选择器
 */
function effectClick($sel) {
    clearTimeout(timer.clickEffect);
    $('.fh-effect-click').removeClass('fh-effect-click');
    $($sel).addClass('fh-effect-click');
    timer.clickEffect = setTimeout(() => {
        $($sel).removeClass('fh-effect-click');
    }, 1000);
}

/**
 * 标签页短暂高亮
 * @param {String} $sel 选择器
 */
function effectFlicker($sel) {
    clearTimeout(timer.clickEffect);
    $('.fh-effect-flicker').removeClass('fh-effect-flicker');
    $($sel).addClass('fh-effect-flicker');
    timer.clickEffect = setTimeout(() => {
        $($sel).removeClass('fh-effect-flicker');
    }, 1000);
}

/**
 * 获取格式化时间
 * @returns {String} 格式化时间
 */
function getTime() {
    let d = new Date();
    return `${d.getFullYear()}-${afterZero(d.getMonth() + 1)}-${afterZero(d.getDate())} ${afterZero(d.getHours())}:${afterZero(d.getMinutes())}:${afterZero(d.getSeconds())}`;
}

/**
 * 时间前补零
 * @param {Number} value 数字
 * @returns {String} 补零后的字符串
 */
function afterZero(value) {
    if (value >= 10) {
        return `${value}`;
    } else {
        return `0${value}`;
    }
}


/**
 * 编辑器插入字符
 * @param {String} id 元素ID
 * @param {String} text 左侧插入字符串
 * @param {String} text2 右侧插入字符串
 * @param {Boolean} forceInputText2 未选中文本时强制插入右侧字符串
 * @param {Boolean} forceRepeatBefore 左侧有相同字符串时强制插入字符串
 * @param {Boolean} forceRepeatAfter 右侧有相同字符串时强制插入字符串
 * @param {Boolean} firstClear 当起始光标在左侧时清除左侧插入字符
 * @param {Function} selectedTextFilter 选中文本过滤器
 */
function insertTextAtCursor(id, text, text2 = '', forceInputText2 = false, forceRepeatBefore = false, forceRepeatAfter = false, firstClear = false, selectedTextFilter = undefined) {
    let textarea       = document.getElementById(id);

    let selectionStart = textarea.selectionStart,
        selectionEnd   = textarea.selectionEnd;

    let textBefore     = textarea.value.substring(0,              selectionStart),
        selectedText   = textarea.value.substring(selectionStart, selectionEnd),
        textAfter      = textarea.value.substring(selectionEnd);

    
    if (!forceRepeatBefore && textBefore.substring(textBefore.length - text.length) == text) text = '';
    if (firstClear && selectionStart == 0) text = '';

    if (selectionStart == selectionEnd) {
        if (!forceInputText2) text2 = '';
        textarea.value = textBefore + text   /*  NONE  */ + text2 + textAfter;
        textarea.setSelectionRange(selectionStart + text.length, selectionStart + text.length);
    } else {
        if (typeof selectedTextFilter == 'function') selectedText = selectedTextFilter(selectedText);
        if (!forceRepeatAfter && textAfter.search(text2) == 0) text2 = '';
        textarea.value = textBefore + text + selectedText + text2 + textAfter;
        textarea.setSelectionRange(selectionStart + text.length, selectionStart + text.length + selectedText.length);
    }
    
    textarea.focus();
    $('#' + id).change();
}

// 复选框
$(document).on('click', '.checkbox', function() {
    let v = $(this).children('input').val();
    let name = $(this).children('input').attr('name');
    if (v == 0) {
        $(this).children('input').val(1);
        $(this).addClass('selected');
        $(this).attr('aria-selected', 'true');
        if ($(this).hasClass('collapse-checkbox')) {
            $(this).parents('.collapse').children('.collapse-content').removeClass('hide');
        }
        if (typeof checkboxEvent[name] == 'function') checkboxEvent[name](1);
    } else {
        $(this).children('input').val(0);
        $(this).removeClass('selected');
        $(this).attr('aria-selected', 'false');
        if ($(this).hasClass('collapse-checkbox')) {
            $(this).parents('.collapse').children('.collapse-content').addClass('hide');
        }
        if (typeof checkboxEvent[name] == 'function') checkboxEvent[name](0);
    }
});

// 标签页切换
$(document).on('click', '.tabpage-nav .tabpage-nav-item:not(.disabled)', function() {
    $(this).parent().children().attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
    const navid = $(this).parent().data('navid');
    const pageid = $(this).data('pageid');
    // console.log($(`.tabpage-centent[data-navid="${navid}"] .tabpage-panel`));
    // document.startViewTransition(() => {});
    $(`.tabpage-centent[data-navid="${navid}"]>.tabpage-panel`).addClass('hide');
    $(`.tabpage-centent[data-navid="${navid}"]>.tabpage-panel[data-pageid="${pageid}"]`).removeClass('hide');
});