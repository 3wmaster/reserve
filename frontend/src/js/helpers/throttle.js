function throttle (type, callback, obj) {
	obj = obj || window;
	var running = false;
	var func = function() {
		if (running) { return; }
		running = true;
		requestAnimationFrame(function() {
			callback();
			running = false;
		});
	};
	obj.addEventListener(type, func);
}
export {throttle};