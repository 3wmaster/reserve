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
            var data = JSON.parse(xhr.responseText);
            if(data.status){
                alert(data.message);
                formTag.reset();
                messaging.send('success');
            } else{
                alert(data.message);
            }
            xhr = false;
        },
        returned = {
            afterUpdate: function(){console.log(333)}
        };
    //
    formModules.times[0].afterChange = function(){returned.afterUpdate()};
    formModules.persons[0].afterChange = updateTime;
    formTag.elements['date'].onchange = updateTime;
    formTag.addEventListener('submit', onSubmit);

    return returned;
};

export {form};