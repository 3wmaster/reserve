<!DOCTYPE html>
<html class="page no-js" lang="ru">

<head>
    <meta charset="utf-8">
    <script>
        document.documentElement.classList.remove('no-js');
    </script>
    <title><?= $page['title']; ?></title>

    <meta name="Keywords" content="<?= $page['keywords']; ?>" />
    <meta name="Description" content="<?= $page['description']; ?>" />
    <meta name="viewport" content="width=device-width">
    <meta name="SKYPE_TOOLBAR" content ="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
    <meta name="robots" content="noindex" /> <!-- на сайт не переносить  -->

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

    <?php if($page['dev']){?>
        <link rel="stylesheet" href="/frontend/src/css/reserve.css?<?php echo time(); ?>" media="all">
    <?php } else { ?>
        <link rel="stylesheet" href="/static/css/reserve.css?<?php echo time(); ?>" media="all">
    <?php } ?>

    <script>
        window.APP = {};
        APP.vars = {
            'restaurant_id': '<?= $_GET['restaurant_id']; ?>',
            'dev': '<?= $_GET['dev']; ?>', /* TODO */
            'api': '<?= $_GET['api']; ?>' /* TODO */
        };
        APP.ajax = {
            'times': '/frontend/src/layouts/reserve/times/',
            'form': '/frontend/src/layouts/reserve/form/',
            'smsForm': '/frontend/src/layouts/reserve/smsForm/'
        };
        APP.vendors = {
            'imask': '/static/js/vendors/imask.js',
            'jquery': '/static/js/vendors/jquery-1.12.0.min.js',
            'jqueryUI': '/static/js/vendors/jquery-ui.js'
        };
    </script>

    <?php if($page['dev']){?>
        <script type= "module" src="/frontend/src/js/reserve.js?<?php echo time(); ?>" async></script>
    <?php } else { ?>
        <script src="/static/js/reserve.js?<?php echo time(); ?>" async></script>
    <?php } ?>

    <?php //helper for layouts ?>
    <?php if($page['dev']){ echo $page['pixelGlass']; } ?>

</head>

<body class="page_body layer text">
<?= render('blocks/symbols.php'); ?>
<div class="page_frame">
    <?= render('blocks/widget.php'); ?>
    <script type="text/template" data-time-template>
        <% for ( var key in this ) { %>
            <label class="widget_time time">
                <input class="time_field" type="radio" name="time" value="<% key %>" />
                <span class="time_data"><% this[key] %></span>
            </label>
        <% } %>
    </script>
</div>
</body>
</html>

