<?

    // for debuging
    error_reporting(E_ALL);

    function render ($layer,$vars=false){
		if (gettype ($vars) == 'array') extract($vars);
		else $var = $vars;
		ob_start();
		require(dirname(__FILE__).'/'.$layer);
		$content=ob_get_contents();
		ob_end_clean();
		return $content;
	}

	$uri = explode('/', $_SERVER['REQUEST_URI']);

	$headers = getallheaders();

    $controller = $uri[4] ? $uri[4] : 'index';
    $controller =  explode ('?', $controller);
    $controller = $controller[0];

    /* Ajax */
	if (isset($headers['X-Request-Ajax'])) {
        if(getenv("REQUEST_METHOD")=='POST'){
            if($controller == 'reserve') {
                if ($uri[5] == 'times') {
                    $data = array(
                        'times' => array(500, 600, 700)
                    );
                    echo json_encode($data);
                } else if ($uri[5] == 'form'){
                    $message = array(
                        'status' => true,
                        'message' => 'Спасибо %username%, в ближайшее время с вами свяжется представитель ресторана и подтвердит детали'
                    );
                    $message = array(
                        'status' => true,
                        'bookID' => '123',
                        'phone' => '79214013539',
                        'smsConfirm' => true,
                        'info' => 'Иван, 19 мая, 12:30',
                        'message' => 'Спасибо %username%, на ваш номер телефона отправлен проверочнй код, введите его в форму ниже.'
                    );
                    echo json_encode($message);
				} else if ($uri[5] == 'smsForm'){
                    $message = array(
                        'status' => true,
                        'message' => 'Спасибо %username%, в ближайшее время с вами свяжется представитель ресторана и подтвердит детали'
                    );
                    echo json_encode($message);
				}
            }
		}
        exit();
    }

    $page = Array();
    $page['title'] = 'Заголовок страницы';
    $page['keywords'] = 'Ключевые слова';
    $page['description'] = 'Описание страницы';
    $page['dev'] = (array_key_exists('dev', $_GET) && $_GET['dev']==1) ? true : false; /* Разработка или нет */
	$page['pixelGlass'] = render('templates/pieces/pixelGlass.php'); /* Аналог Perfect Pixel */

    $controller = file_exists(dirname(__FILE__).'/controllers/'. $controller .'.php') ? $controller : 'index';

	header('Content-type: text/html; charset=utf-8');
	require_once (dirname(__FILE__) . '/controllers/' . $controller . '.php');

?>

