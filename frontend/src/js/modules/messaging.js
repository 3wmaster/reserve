var messaging = function () {
    var targetOrigin = '*',
        send = function(act, data){
            var msg = {'name':'reserveWidget', 'act':act, data:data};
            top.postMessage(msg, targetOrigin);
        },
        returned = {
            send:send
        }
    //
    return returned;
}();

export {messaging};