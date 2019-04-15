import {throttle} from '../helpers/throttle.js';
import {templateEngine} from '../helpers/templateEngine.js';
import {serialize} from '../helpers/serialize.js';
import {minsToTime} from '../helpers/minsToTime.js';

var helpers = function () {
	return {
        'throttle': throttle,
        'templateEngine': templateEngine,
        'serialize': serialize,
        'minsToTime': minsToTime
	}
};

export {helpers};