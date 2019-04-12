var widget = function (el) {
    var closeBtn = el.querySelector('[data-widget-close]'),
        reset = function(){
            alert(111);
        };

    //
    closeBtn.onclick = reset;
};

export {widget};