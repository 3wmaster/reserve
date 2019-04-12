var height = function (el) {
    var init = function(){
        var win = top,
            targetOrigin = '*',
            widgetHeight,
            getHeight = function(){
                var rect = el.getBoundingClientRect();
                return rect.height;
            },
            checkHeight = function(){
                var h = el.getBoundingClientRect().height;
                if(widgetHeight !== h){
                    win.postMessage({'act': 'changeHeight', param:{'height': h}}, targetOrigin);
                    widgetHeight = h;
                }
            },
            callbacks = {
                ready: function () {
                    console.log('Виджет получил сообщение со страницы, что она готова', event);
                    win.postMessage({'act': 'ready', param:{'height': getHeight()}}, targetOrigin);
                }
            },
            onMessage = function(event){
                // TODO проверка на домен
                var msg = event.data;
                try{
                    callbacks[msg.act](msg.param)
                } catch(e){}
            };

        //
        win.postMessage({'act': 'ready', param:{'height': getHeight()}}, targetOrigin);
        window.addEventListener('message', onMessage);
        APP.helpers.throttle('scroll', checkHeight);
        APP.helpers.throttle('resize', checkHeight);
        APP.helpers.throttle('orientationchange', checkHeight);
    };

    //
    if(window === top) return;

    if (document.readyState === "complete") {
        init();
    } else {
        window.addEventListener('load', init);
    }
};

export {height};