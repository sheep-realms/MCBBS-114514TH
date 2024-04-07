class DOMConstructor {
    constructor() {}

    static join(domlist = []) {
        return domlist.join('');
    }
}

// 字段列表构造器
class EditorTextList {
    constructor() {}

    /**
     * 项目
     * @param {Number} index 索引编号
     * @param {String} value 值
     * @returns {String} DOM
     */
    static getItem(index, value) {
        return `
        <div class="editor-text-list-item" data-index="${index}">
            <span class="index">${index + 1}.</span>
            <span class="text">${value.text}</span>
            <span class="btn">
                <button class="fh-button fh-small" data-index="${index}">编辑</button>
                <button class="fh-button fh-small fh-danger" data-index="${index}">删除</button>
            </span>
        </div>`;
    }

    /**
     * 列表
     * @param {String} value 值
     * @returns {String} DOM
     */
    static getList(value) {
        let dom = '';
        for (let i = 0; i < value.length; i++) {
            dom += this.getItem(i, value[i]);
        }
        return dom;
    }
}

// 表单构造器
class EditorForm {
    constructor() {}

    /**
     * 提示
     * @param {String} label 标签名称
     * @returns {String} DOM
     */
    static tip(label) {
        return `<div class="echo-editor-form-checkbox-list"><span class="echo-editor-form-input-tip">${label}</span></div>`
    }

    /**
     * 表单项目
     * @param {String} id ID
     * @param {String} label 标签名称
     * @param {String} content 内容
     * @param {String} tip 提示
     * @returns {String} DOM
     */
    static item(id, label, content, tip = '') {
        return `<div class="echo-editor-form-row"><label for="${id}">${label}</label>${content}</div>${tip != '' ? FormConstructor.tip(tip) : ''}`;
    }

    /**
     * 输入框
     * @param {String} id ID
     * @param {String} label 标签名称
     * @param {String} def 默认值
     * @param {String} tip 提示
     * @param {String} type 类型
     * @returns {String} DOM
     */
    static input(id, label, def, tip = '', type = 'text') {
        return FormConstructor.item(
            id,
            label,
            `<input type="${type}" name="${id}" id="${id}" class=" echo-editor-form-item" value="${def}" data-default="${def}">`,
            tip
        );
    }

    /**
     * 数字输入框
     * @param {String} id ID
     * @param {String} label 标签名称
     * @param {String} def 默认值
     * @param {String} tip 提示
     * @returns {String} DOM
     */
    static inputNum(id, label, def, tip = '') {
        return FormConstructor.input(id, label, def, tip, 'number');
    }

    /**
     * 复选框
     * @param {String} id ID
     * @param {String} label 标签名称
     * @param {String} def 默认值
     * @param {String} tip 提示
     * @returns {String} DOM
     */
    static checkbox(id, label, def, tip = '') {
        return FormConstructor.item(
            id,
            '',
            `<button role="checkbox" aria-selected="${def}" class="checkbox ${def == 1 ? 'selected' : ''}">
                <span class="icon"></span>
                <span class="text">${label}</span>
                <input type="hidden" name="${id}" id="${id}" value="${def}" data-default="${def}">
            </button>`,
            tip
        );
    }

    /**
     * 按钮
     * @param {String} content 内容
     * @param {Object} data 属性值
     * @param {String} data.id ID
     * @param {String} data.class 类
     * @param {String} data.attr 额外的 HTML 属性
     * @param {String} data.title Title 属性
     * @param {String} data.icon 图标元素
     * @param {Boolean} data.disabled 禁用按钮
     * @param {undefined|'ghost'|'dashed'|'air'} data.type 按钮类型
     * @param {undefined|'big'|'small'} data.size 按钮尺寸
     * @param {undefined|'safe'|'warn'|'danger'|'special'} data.color 按钮功能色
     * @returns {String} DOM
     */
    static button(content, data) {
        return `<button
            ${data?.id ? `id="${data.id}"` : ''}
            class="
                fh-button
                ${data?.type ? 'fh-' + data?.type : ''}
                ${data?.size ? 'fh-' + data?.size : ''}
                ${data?.color ? 'fh-' + data?.color : ''}
                ${data?.icon ? 'fh-icon-button' : ''}
                ${data?.class ? data.class : ''}
            "
            ${data?.disabled ? 'disabled' : ''}
            ${data?.title ? `title="${data.title}"` : ''}
            ${data?.attr ? data.attr : ''}
        >
            ${data?.icon ? data?.icon : ''}${content}
        </button>`
    }

    /**
     * 按钮
     * @param {String} content 内容
     * @param {Object} data 属性值
     * @param {String} data.id ID
     * @param {String} data.class 类
     * @param {String} data.attr 额外的 HTML 属性
     * @param {String} data.title Title 属性
     * @param {String} data.icon 图标元素
     * @param {Boolean} data.disabled 禁用按钮
     * @param {undefined|'big'|'small'} data.size 按钮尺寸
     * @param {undefined|'safe'|'warn'|'danger'|'special'} data.color 按钮功能色
     * @returns {String} DOM
     */
    static buttonGhost(content, data) {
        data = {
            ...data,
            ...{
                type: 'ghost'
            }
        }
        return EditorForm.button(content, data);
    }

    /**
     * 按钮
     * @param {String} content 内容
     * @param {Object} data 属性值
     * @param {String} data.id ID
     * @param {String} data.class 类
     * @param {String} data.attr 额外的 HTML 属性
     * @param {String} data.title Title 属性
     * @param {String} data.icon 图标元素
     * @param {Boolean} data.disabled 禁用按钮
     * @param {undefined|'big'|'small'} data.size 按钮尺寸
     * @param {undefined|'safe'|'warn'|'danger'|'special'} data.color 按钮功能色
     * @returns {String} DOM
     */
    static buttonAir(content, data) {
        data = {
            ...data,
            ...{
                type: 'air'
            }
        }
        return EditorForm.button(content, data);
    }

    /**
     * 编辑器控制器
     * @param {String} editorID 编辑器ID
     * @returns {String} DOM
     */
    static editorController(editorID) {
        return DOMConstructor.join([
            EditorForm.buttonAir('', {
                icon: Icon.formatBold(),
                class: 'editor-format-btn',
                attr: `data-editorid="${editorID}" data-value="bold"`,
                title: $t('editor.format.bold') + ' [Ctrl+B]'
            }),
            EditorForm.buttonAir('', {
                icon: Icon.formatItalic(),
                class: 'editor-format-btn',
                attr: `data-editorid="${editorID}" data-value="italic"`,
                title: $t('editor.format.italic') + ' [Ctrl+I]'
            }),
            EditorForm.buttonAir('', {
                icon: Icon.formatUnderline(),
                class: 'editor-format-btn',
                attr: `data-editorid="${editorID}" data-value="underline"`,
                title: $t('editor.format.underline') + ' [Ctrl+U]'
            }),
            EditorForm.buttonAir('', {
                icon: Icon.formatStrikethroughVariant(),
                class: 'editor-format-btn',
                attr: `data-editorid="${editorID}" data-value="strikethrough"`,
                title: $t('editor.format.strikethrough') + ' [Ctrl+D]'
            }),
            EditorForm.buttonAir('', {
                icon: Icon.palette(),
                class: 'editor-format-btn',
                attr: `data-editorid="${editorID}" data-value="color"`,
                title: $t('editor.format.color')
            }),
            EditorForm.buttonAir('', {
                icon: Icon.formatClear(),
                class: 'editor-format-btn',
                attr: `data-editorid="${editorID}" data-value="clear"`,
                title: $t('editor.format.clear') + ' [Ctrl+Shift+Space]'
            })
        ]);
    }
}




class SettingsPanel {
    constructor() {}

    static navItem(item) {
        return `<button
            class="settings-nav-item"
            data-pageid="${ item.id }"
            role="tab"
            aria-selected="false"
            title="${ $t( 'nav.' + item.id + '.description' ) }"
        >
            <span class="icon left">${ item.icon != undefined ? Icon[item.icon]() : ''}</span>
            <span class="title">${ $t( 'nav.' + item.id + '.title' ) }</span>
            <span class="icon right"></span>
        </button>`;
    }

    static nav(items) {
        let dom = '';
        items.forEach(e => {
            dom += SettingsPanel.navItem(e);
        });

        return dom;
    }

    static page(id, content = '') {
        return `<div class="settings-page hide" data-pageid="${ id }">${ content }</div>`;
    }

    static setGroupTitle(title = '', description = '') {
        return `<div class="settings-group-title">
            <div class="title">${ title }</div>
            <div class="description">${ description }</div>
        </div>`;
    }

    static setItem(id = 0, title = '', description = '', author = '', createdAt = '') {
        return `<div class="settings-item" data-id="${ id }">
            <div class="meta">
                <div class="title">${ title }</div>
                <div class="description">${ description }</div>
            </div>
            <div class="from">
                <div class="author">
                    <span class="icon">${ Icon.account() }</span>
                    <span class="value">${ author }</span>
                </div>
                <div class="created-at">
                    <span class="icon">${ Icon.history() }</span>
                    <span class="value">${ createdAt }</span>
                </div>
            </div>
        </div>`;
    }

    static setItemAuto(item) {
        const fun = {
            string: 'setItemString',
            number: 'setItemNumber',
            boolean: 'setItemBoolean',
        }

        const funSpecial = {
            all_or_array_string: 'setItemAllOrArrayString'
        };

        let types = item.type.split('.');

        let run = fun[types[0]];

        if (types[0] == 'special') {
            run = funSpecial[types[1]];
        }

        if (run == undefined) run = 'setItemUnknow';

        const title = $t( 'config.' + item.name + '._title' );
        const description = $t( 'config.' + item.name + '._description' );

        if (item.type == 'object') return SettingsPanel.setGroupTitle(title, description);
        if (item.type == 'boolean.bit') return SettingsPanel.setItemBoolean(item.type, item.name, title, description, item.default, item?.attribute, true);

        return SettingsPanel[run](item.type, item.name, title, description, item.default, item?.attribute);
    }

    static setItems(items) {
        let dom = '';
        items.forEach(e => {
            dom += SettingsPanel.setItem(e.id, e.title, e.description, e.author, e.createdAt);
        });
        return dom;
    }

    static linkBar(title = '', href = '', icon = undefined) {
        return `<a class="settings-link-bar" href="${ href }" target="_blank">
            <div class="icon left">${ icon != undefined ? Icon[icon]() : '' }</div>
            <div class="title">${ title }</div>
            <div class="icon right">${ Icon.openInNew() }</div>
        </a>`;
    }

    static linkBarGroupTitle(title = '') {
        return `<div class="settings-link-bar-group-title">${ title }</div>`;
    }

    /**
     * 消息框
     * @param {String} title 标题
     * @param {String} content 内容
     * @param {String} icon 图标名称
     * @param {'info'|'warn'|'error'|'black'} type 类型
     * @returns {String} DOM
     */
    static msgBox(title = '', content = '', icon = 'information', type = 'info') {
        return `<div class="msgbox state-${ type }">
            <div class="icon">${ Icon[icon]() }</div>
            <div class="text">
                <div class="title">${ title }</div>
                <div class="content">${ content }</div>
            </div>
        </div>`;
    }

    /**
     * 警告消息框
     * @param {String} title 标题
     * @param {String} content 内容
     * @param {String} icon 图标名称
     * @returns {String} DOM
     */
    static msgBoxWarn(title = '', content = '', icon = 'alert') {
        return SettingsPanel.msgBox(title, content, icon, 'warn');
    }

    /**
     * 高对比度消息框
     * @param {String} title 标题
     * @param {String} content 内容
     * @param {String} icon 图标名称
     * @returns {String} DOM
     */
    static msgBoxBlack(title = '', content = '', icon = 'information') {
        return SettingsPanel.msgBox(title, content, icon, 'black');
    }
}