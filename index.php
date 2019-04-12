<!DOCTYPE html>
<html lang="ru">

<head>
    <meta name="viewport" content="width=device-width">

    <style>
        body{
            overflow-y:scroll;
            overflow-x:hidden;
            margin:0;
            padding:0;
        }
        .wrapper{
            display:flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            min-width:100vw;
            min-height:100vh;
            padding:40px;
        }
        .widget{
            width:100%;
            min-width:320px;
            max-width:600px;
            height:0; /* will be change */
            transition: height .3s;
            border:none;
            background-color:#f00;
        }
    </style>

</head>

<body>
<div class="wrapper">
    <iframe id="widget" class="widget" src="/frontend/src/layouts/main/?api=1&dev=1"></iframe>
</div>
<script>
    (function(root, doc){
        var iframe = doc.getElementById('widget'),
            win = iframe.contentWindow,
            targetOrigin = '*',
            callbacks = {
                ready: function (data) {
                    console.log('Страница получила сообщение от виджета, что он готов', event);
                    iframe.style.height = data.height + 'px';
                },
                changeHeight: function(data){
                    console.log('меняем высоту', data.height);
                    iframe.style.height = data.height + 'px';
                }
            },
            onMessage = function(msg){
                // TODO проверка на домен
                var msg = event.data;
                try{
                    callbacks[msg.act](msg.param)
                } catch(e){}
            };

        //
        win.postMessage({'act': 'ready'}, targetOrigin);
        root.addEventListener('message', onMessage);
        /*setTimeout(function(){
            win.postMessage({'act': 'ready'}, targetOrigin);
            root.addEventListener('message', onMessage);
        }, 5000)*/



    })(window, document);
</script>
</body>
</html>

