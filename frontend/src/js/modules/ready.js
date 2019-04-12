
var ready = function(func){
		
	var isDOM,
		detach = function() {
			if ( document.addEventListener ) {
				document.removeEventListener( "DOMContentLoaded", checkDOM, false );
				window.removeEventListener( "load", checkDOM, false );

			} else {
				document.detachEvent( "onreadystatechange", checkDOM );
				window.detachEvent( "onload", checkDOM );
			}
		},
		checkDOM = function() {
			if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
				detach();
				DOMReady();
			}
		},				
		DOMReady = function(){
			if (isDOM)  return;
			isDOM = true;
			
			func();
		};
	
	//			
	if (document.readyState === "complete") { 
		setTimeout(DOMReady);
	}			
	else if ( document.addEventListener ) {
		document.addEventListener( "DOMContentLoaded", checkDOM, false );
		window.addEventListener( "load", checkDOM, false );
	} 
	else {
		document.attachEvent( "onreadystatechange", checkDOM );
		window.attachEvent( "onload", checkDOM );
	
		var top = false;

		try {
			top = window.frameElement == null && document.documentElement;
		} catch(e) {}

		if ( top && top.doScroll ) {
			(function doScrollCheck() {
				if (!isDOM) {

					try {
						top.doScroll("left");
					} catch(e) {
						return setTimeout( doScrollCheck, 50 );
					}

					detach();
					DOMReady();
				}
			})();
		}
	}
};
export {ready};

















