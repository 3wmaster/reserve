
var persons = function(el){
	var btns = el.querySelectorAll('[data-persons-btn]'),
		resultObj = el.querySelector('[data-persons-result]'),
		result = parseFloat(resultObj.value),
		newResult,
		max = 20,
		min = 1,
		change = function(e){
			e.preventDefault();
			var delta = parseFloat(this.getAttribute(['data-persons-btn']));
			newResult = Math.max(min, Math.min(max, result + delta));
			resultObj.value = newResult;
            result = newResult;
		};

	//
	btns.forEach(function(btn){
		btn.onclick = change;
	});
};
export {persons};

















