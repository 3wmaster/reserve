import {messaging} from "./messaging.js";

var form = function (formTag) {
    var xhr,
        formModules =  APP.modules.run(formTag, 'data-form-modules'),
        updateTime =function(){
            var data =  new FormData(formTag);
            formModules.times[0].update(data);
        },
        onSubmit = function(e){
            e.preventDefault();
            if(xhr) return;
            var formData = new FormData(formTag);
            xhr = new XMLHttpRequest();
            xhr.open("POST", APP.ajax.form, true);
            xhr.setRequestHeader("X-Request-Ajax","1");
            xhr.onload = onLoad;
            xhr.send(formData);
        },
        onLoad = function(){

            /* если вдруг получаем не JSON строку - выводим алерт */
            try{
                var data = JSON.parse(xhr.responseText);
            } catch(e){
                alert('Идет обновление, попробуйте зайти через пару минут');
                xhr = false;
                return;
            };

            if(data.status){
                /* смотрим, нужно или нет показвать форму с подтверждением смс */
                if(data.smsConfirm){
                    returned.showSmsForm(data);
                    alert(data.message);
                }
                else {
                    alert(data.message);
                    formTag.reset();
                    messaging.send('success');
                }
            } else{
                alert(data.message);
            }
            xhr = false;
        },
        returned = {
            showSmsForm: function(){},
            afterUpdate: function(){}
        };
    //
    formModules.times[0].afterChange = function(){returned.afterUpdate()};
    formModules.persons[0].afterChange = updateTime;
    formTag.elements['date'].onchange = updateTime;
    formTag.addEventListener('submit', onSubmit);

    return returned;
};

export {form};