<?php

    $page['title'] =  'Главная страница';

	echo render(
		'templates/base.php',
		array(
			'page' => $page
		)
	);
?>

