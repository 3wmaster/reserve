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
        <link rel="stylesheet" href="/frontend/src/css/base.css?<?php echo time(); ?>" media="all">
    <?php } else { ?>
        <link rel="stylesheet" href="/frontend/assets/css/base.css?<?php echo time(); ?>" media="all">
    <?php } ?>

    <script>
        window.APP = {};
        APP.vars = {

        };

        APP.vendors = {
            'imask': '/assets/js/vendors/imask.js',
            'jquery': '/assets/js/vendors/jquery-1.12.0.min.js',
            'jqueryUI': '/assets/js/vendors/jquery-ui.js'
        };
    </script>


    <script type= "module" src="/frontend/src/js/base.js?<?php echo time(); ?>" async></script>

    <?php //helper for layouts ?>
    <?php if($page['dev']){ echo $page['pixelGlass']; } ?>

</head>

<body class="page_body layer text">
<?= render('blocks/symbols.php'); ?>
<div class="page_frame">
    <?= render('blocks/widget.php'); ?>
</div>
</body>
</html>

