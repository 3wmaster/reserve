import {messaging} from "./messaging.js";

var confirm = function (el) {
    var confirmBtn = document.querySelector('[data-confirm-btn]'),
        closeBtn = el.querySelector('[data-confirm-close]'),
        continueBtn = el.querySelector('[data-confirm-continue]'),
        widgetTag = APP.tags.widget,
        confirmWidget = function(){
            widgetTag.classList.add('widget-confirm');
        },
        closeWidget = function(){
            widgetTag.classList.remove('widget-confirm');
            widgetTag.classList.add('widget-close');
            messaging.send('close');

        },
        continueWidget = function(){
            widgetTag.classList.remove('widget-confirm');
        };

    //
    confirmBtn.onclick = confirmWidget;
    continueBtn.onclick = continueWidget;
    closeBtn.onclick = closeWidget;
};

export {confirm};