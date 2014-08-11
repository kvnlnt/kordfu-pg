var Kordfu = function(options){

	// SETTINGS

		options 			= options || {};
		this.DOM            = {};
	    this.settings       = {};
	    this.settings.theme = void 0 === options.theme ? this.theme().zen : options.theme;
	    this.lucilles       = [];

};

Kordfu.prototype.addLucille = function(e){

	var lucille = new Lucille();
	this.lucilles.push(lucille);

	this.DOM.addWrapper.insertAfter($('.lucille').last());

	return this.lucilles;

}

Kordfu.prototype.init = function() {
	
	var that = this;
	
	// DOM
	this.DOM.add        = $("#add");
	this.DOM.addWrapper = $("#addWrapper");

	// EVENTS
	this.DOM.add.on('click', function(){ that.addLucille() });

	// initializers
	this.themeLoad();
	this.addLucille();

};