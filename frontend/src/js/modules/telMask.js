import {scriptonload} from '../modules/scriptonload.js';

var telMask = function (inputEl) {
    var maskOptions = {
            mask: inputEl.getAttribute('placeholder')
        },
        init = function(){
            new IMask(inputEl, maskOptions);
        };

    //
    scriptonload(APP.vendors.imask, init);
};

export {telMask}; 