APP.core.Util = Class.extend({
	getHash: function(n) {
		var hash = window.location.hash.toString().split('/');

		if (!isNaN(n)) {
			return (hash[n]) ? hash[n] : null;
		}

		return hash;
	},

	setHash: function(query) {
		if (query) {
			window.location.hash = '/' + (query || '');
		} else {
			window.location.hash = '';
		}
	},

	isMobile: function() {
		var userAgent = window.navigator.userAgent;

		return this.isIpad() || this.isIphone || this.isAndroid();
	},

	isIpad: function() {
		var userAgent = window.navigator.userAgent;
		return userAgent.search('iPad') != -1;
	},

	isIphone: function() {
		var userAgent = window.navigator.userAgent;
		return userAgent.search('iPhone') != -1 || userAgent.search('iPod') != -1;
	},

	isAndroid: function() {
		var userAgent = window.navigator.userAgent;
		return userAgent.search('Android') != -1;
	}
});
