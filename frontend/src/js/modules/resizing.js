import {messaging} from './messaging.js';

var resizing = function (el) {
    var resizingTag = el.querySelector('[data-height-resizing]'), /* TODO */
        topWin = top,
        widgetHeight,
        getHeight = function(){
            var rect = el.getBoundingClientRect();
            return rect.height;
        },
        checkHeight = function(){
            var h = getHeight();
            if(widgetHeight !== h){
                messaging.send('changeHeight', {'height': h});
                widgetHeight = h;
            }
        },
        init = function(){
            var targetOrigin = '*',
            callbacks = {
                ready: function () {
                    console.log('Виджет получил сообщение со страницы, что она готова', event);
                    messaging.send('ready', {'height': getHeight()});
                }
            },
            onMessage = function(event){
                // TODO проверка на домен
                var msg = event.data;
                if(msg.name !== 'reserveWidget') return;
                try{
                    callbacks[msg.act](msg.param)
                } catch(e){}
            };

            //
            messaging.send('ready', {'height': getHeight()});
            window.addEventListener('message', onMessage);
            APP.helpers.throttle('resize', checkHeight);
            APP.helpers.throttle('orientationchange', checkHeight);

        },
        run = function(){
            if (document.readyState === "complete") {
                init();
            } else {
                window.addEventListener('load', init);
            }
        },
        returned = {
            run: run,
            checkHeight: checkHeight
        };

    //
    return returned;
};

export {resizing};