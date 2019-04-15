var times = function (wrapper) {
    var xhr = false,
        template = document.querySelector('[data-time-template]').innerHTML,
        onLoad = function(){
            var times = JSON.parse(xhr.responseText).times;
            var convert = function(){
                var obj = {};
                times.forEach(function(time){
                    obj[time] = APP.helpers.minsToTime(time);
                });
                return obj;
            }();
            wrapper.innerHTML = APP.helpers.templateEngine(template, convert);
            returned.after();
            xhr = false;
        },
        update = function(){
            if(xhr) xhr.abort();
            xhr = new XMLHttpRequest();
            xhr.open("POST", APP.ajax.times, true);
            xhr.setRequestHeader("X-Request-Ajax","1");
            xhr.onload = onLoad;
            xhr.send('');
        },
        returned = {
            update:update,
            after:function(){}
        };

    //
    return returned;
};

export {times};