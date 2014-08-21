var Kordfu = function(options){

	// SETTINGS

		options 			= options || {};
		this.DOM            = {};
	    this.settings       = {};
	    this.settings.theme = void 0 === options.theme ? this.theme().zen : options.theme;
	    this.lucilles       = [];

};

Kordfu.prototype.addLucille = function(e){
	
	// Create plukit based on platform
	var platform = "undefined" === typeof device ? 'browser' : device.platform; // figure out device

	// set path based on platform
	switch(platform){
		case 'Android':
			var path = '/android_asset/www/modules/plukit/';
			break;
		default:
			var path = 'modules/plukit/';
			break;
	}

	// create plukit object with above
	var plukit  = new Plukit({ sampleFile:PLUKIT.guitar.acoustic.steel.mp3, samplePath:path, device:platform });

	// create new lucille
	var lucille = new Lucille({ plukit:plukit });

	// add to collection
	this.lucilles.push(lucille);

	// insert into DOM
	this.DOM.footer.insertAfter($('.lucille').last());

	// return lucille object
	return lucille;

}

Kordfu.prototype.init = function() {
	
	var that = this;
	
	// DOM
	this.DOM.add        = $("#add");
	this.DOM.footer = $("#footer");

	// EVENTS
	this.DOM.add.on('click', function(){ that.addLucille() });

	// initializers
	this.themeLoad();
	this.addLucille();

};