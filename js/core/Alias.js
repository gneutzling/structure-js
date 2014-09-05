jQuery.noConflict();

/* Alias for console functions */
function cl(param) {
	try {
		if (arguments.length > 1) {
			console.log(arguments);
		} else {
			console.log(param);
		}
	} catch (e) {}
}

function cd() {
	try {
		console.dir(arguments);
	} catch (e) {}
}

function cg() {
	try {
		console.group();

		for (var i = 0; i < arguments.length; i++) {
			console.log(arguments[i]);
		}

		console.groupEnd();
	}
	catch (e) {}
}


/**
 * No conflict namespace
 * APP.component - component classes
 * APP.core - core classes
 * APP.data - JSON data
 * APP.global - global parameters
 * APP.i - instances
 */
var APP = {
	component: {},
	core: {},
	data: {},
	templates: {},
	config: {},
	global: {},
	paths: {},
	i: {}
};
