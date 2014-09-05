/**
 * Simple Popup Core
 */

APP.component.Popup = APP.core.Component.extend({

	setDefaultConfig: function () {
		this.defaultConfig = {
			scope: '.popup-custom'
		}
	},

	ready: function () {
		console.log('Popup is ready!');
		this.setup();
		this.attach();
		this.events();
	},

	setup: function () {
		console.log(this.config)
		this.scope = jQuery(this.config.scope);
		this.btnClose = this.scope.find(this.config.btnClose);
		this.overlock = jQuery('.overlock');

		this.isOpened = false;
	},

	attach: function () {
		
	},

	events: function () {
		var _this = this;

		this.btnClose.on('click', function (ev) {
			ev.preventDefault();
			_this.close();
		});
	},

	show: function () {
		this.scope.fadeIn();
		this.overlock.fadeIn();
		this.isOpened = true;
	},

	close: function () {
		this.scope.fadeOut();
		this.overlock.fadeOut();
		this.isOpened = false;
	},

	resize: function () {
		
	}

});



APP.component.PopupAlert = APP.component.Popup.extend({
	
});


