import {splitAtIndex} from './util.js';
require('../sass/main.scss');
const $ = require('jquery');
const template = require('../pug/editor.pug');

const html = template({});
document.body.innerHTML += html;

$('.editable-element').click(function(e) {
    e.preventDefault();
    const edit_box = $(this).find('.hidden-edit-box');
    edit_box.focus();
});

$('.hidden-edit-box').bind('input propertychange keyup click', function() {
    var t = $(this);
    const split = splitAtIndex($(this).val(), t[0].selectionStart);
    const cursor = "<div class='cursor'></div>";
    const value = split[0] + cursor + split[1];
    t.parent().find('.content > .text').html(value);
});


$('.hidden-edit-box').on('focusout', function() {
    $(this).parent().find('.cursor').remove();
});

