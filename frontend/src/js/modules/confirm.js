import {messaging} from "./messaging.js";

var confirm = function (el) {
    var confirmBtn = document.querySelector('[data-confirm-btn]'),
        closeBtn = el.querySelector('[data-confirm-close]'),
        continueBtn = el.querySelector('[data-confirm-continue]'),
        confirmWidget = function(){
            el.classList.add('widget-confirm');
        },
        closeWidget = function(){
            el.classList.remove('widget-confirm');
            el.classList.add('widget-close');
            messaging.send('close');

        },
        continueWidget = function(){
            el.classList.remove('widget-confirm');
        };

    //
    confirmBtn.onclick = confirmWidget;
    continueBtn.onclick = continueWidget;
    closeBtn.onclick = closeWidget;
};

export {confirm};