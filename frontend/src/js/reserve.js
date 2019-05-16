import {helpers} from './modules/helpers.js';
import {ready} from './modules/ready.js';
import {telMask} from './modules/telMask.js';
import {persons} from './modules/persons.js';
import {scriptonload} from './modules/scriptonload.js';
import {resizing} from './modules/resizing.js';
import {times} from './modules/times.js';
import {confirm} from './modules/confirm.js';
import {form} from './modules/form.js';
import {smsForm} from './modules/smsForm.js';


APP.helpers = helpers();
APP.tags = {};

APP.modules = {
    actions: {
        telMask: function(el){return telMask(el)},
        resizing: function(el){return resizing(el)},
        persons: function(el){return persons(el)},
        form: function(el){return form(el)},
        smsForm: function(el){return smsForm(el)},
        times: function(el){return times(el)},
        uidatepicker: function(el){
            var init = function(){
                    $.datepicker.regional['ru'] = {
                        closeText: 'Закрыть',
                        prevText: '&#x3c;Пред',
                        nextText: 'След&#x3e;',
                        currentText: 'Сегодня',
                        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 'Июл','Авг','Сен','Окт','Ноя','Дек'],
                        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                        dateFormat: 'dd-mm-yy',
                        firstDay: 1,
                        isRTL: false,
                        showOtherMonths:true,
                        selectOtherMonths:true,
                        changeMonth:true,
                        changeYear: true
                    };
                    $.datepicker.setDefaults($.datepicker.regional['ru']) ;
                    $(el).datepicker({
                        yearRange: "-10:+0"
                    });
                },
                checkUI = function(){
                    scriptonload(APP.vendors.jqueryUI, init);
                };

            if(!window.jQuery) scriptonload(APP.vendors.jquery, checkUI);
            else checkUI();
        },
        confirm: function(el){return confirm(el)}
    },
    run:function(wrapper, attr, data){
        var wrapper = wrapper || document,
            attr = attr || 'data-modules',
            elementAll = wrapper.querySelectorAll('['+ attr +']'),
            moduleAll = {}; /* ключи - названия модулей, значения - сами модули */

        //
        for(var i=0,j=elementAll.length; i<j; i++){
            var el = elementAll[i],
                nameAll = el.getAttribute(attr).split(' ');

            for(var m=0,n=nameAll.length; m<n; m++){
                var name = nameAll[m];

                if(!this.actions[name]){
                    try {console.error('модуль '+ name +' не найден')} catch(e){};
                    continue;
                }

                if(!moduleAll[name]) moduleAll[name] = [];
                moduleAll[name].push(this.actions[name](el, data));
            }
        }
        return moduleAll;
    },
    destroy:function(moduleAll){
        for(var name in moduleAll){
            var arr = moduleAll[name];
            for(var i=0,j=arr.length; i<j; i++){
                var module = arr[i];
                if(module && module.del) module.del();
                else if(module && module.destroy) module.destroy();
            }
        }
    }
};

//

/* TODO */
/* После того, как смс форма будет на бое - убрать  проверки, на даннй момент она всегда должна быть в разметке */


ready(function(){
    APP.tags.widget = document.getElementById('widget');
    var allModules = APP.modules.run();
    var resizingObj = allModules.resizing[0];
    var formObj = allModules.form[0];
    var smsFormObj = allModules.smsForm ? allModules.smsForm[0] : undefined;

    // TODO

    formObj.showSmsForm = function(data){
        smsFormObj.run(data);
    }

    if(window !== top){
        formObj.afterUpdate = resizingObj.checkHeight;
        if(smsFormObj) smsFormObj.afterUpdate = resizingObj.checkHeight;
        resizingObj.run();
    }
});






