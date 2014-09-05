APP.core.Component = Class.extend({
	init: function (data) {
		this.defaultConfig = {};
		this.config = {};
		this.data = data || {};

		// setup configuration
		this.setDefaultConfig();
		this.config = this.getConfig();

		this.ready();
	},

	setDefaultConfig: function () {
		this.defaultConfig = {};
	},

	getConfig: function () {
		// return jQuery.extend(true, this.defaultConfig, this.data.settings || {});
		
		var customConfig = this.data.settings;
		
		if (customConfig) {
			return jQuery.extend(true, {}, this.defaultConfig, customConfig);
		}
		
		return this.defaultConfig;
	},

	ready: function () {
		console.log('Component ready method.');
	}

});