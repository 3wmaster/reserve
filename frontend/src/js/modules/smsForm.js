import {messaging} from "./messaging.js";

var smsForm = function (formTag) {
    var xhr,
        bookingField = formTag.querySelector('[data-smsForm-bookingField]'),
        infoTag = formTag.querySelector('[data-smsForm-infoTag]'),
        cancelBtn = formTag.querySelector('[data-smsForm-cancelBtn]'),
        widgetTag = APP.tags.widget,
        onSubmit = function(e){
            e.preventDefault();
            if(xhr) return;
            var formData = new FormData(formTag);
            xhr = new XMLHttpRequest();
            xhr.open("POST", APP.ajax.smsForm, true);
            xhr.setRequestHeader("X-Request-Ajax","1");
            xhr.onload = onLoad;
            xhr.send(formData);
        },
        onCancel = function(e){
            e.preventDefault();
            if(xhr) return;
            bookingField.value = '';
            widgetTag.classList.remove('widget-smsForm');
            returned.afterUpdate()
        },
        onLoad = function(){
            var data = JSON.parse(xhr.responseText);
            formTag.reset();
            if(data.status){
                alert(data.message);
                widgetTag.classList.remove('widget-smsForm');
                messaging.send('success');
            } else{
                alert(data.message);
            }
            xhr = false;
        },
        run = function(data){
            bookingField.value = data.bookID;
            infoTag.innerHTML = data.info;
            widgetTag.classList.add('widget-smsForm');
            returned.afterUpdate();
        },
        returned = {
            run:run,
            afterUpdate: function(){}
        };
    //
    formTag.addEventListener('submit', onSubmit);
    cancelBtn.addEventListener('click', onCancel);
    return returned;
};

export {smsForm};