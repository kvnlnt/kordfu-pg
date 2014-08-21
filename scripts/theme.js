// Usage:
// Pass a theme object in options formatted like so, else defaults will be applied:

// theme:{
// 	background:...
// 	touchTargetBackground:...
// }

Kordfu.prototype.theme = function(){

	var zen = { 
		background:'#000000',
		textColor:'#FFFFFF',
		accent:'#FF0000'
	};

	return {
		zen:zen
	}

};

Kordfu.prototype.themeLoad = function(){

	// remove if exists
	$('.kordfuTheme').remove();

	// theme
	var style = this.settings.theme;
	var css   = '';
	var add   = function(prop, value){ css += prop + '{' + value + '}'; };
	var theme = $('<style>');
		theme.attr('type','text/css');
		theme.attr('class','kordfuTheme');

		// backgrounds

			add('html, body', 'margin:0 0 3rem; padding:0;');
			add('body','background: '+style.background + '; text-align:center;');

		// header

			add('nav, p, a', 'color:'+style.textColor);
			add('nav, p, a', 'font-family:\'VarelaRound\';');
			add('nav', 'line-height: 3rem;');
			add('nav', 'height:0');
			add('nav, p, a', 'text-align:center; margin:0; cursor:pointer;');
			add('nav h1', 'margin:0; display:inline-block;');
			add('nav button', 'font-family:FontAwesome; margin:0 1rem; font-size: 1rem; color: #FFFFFF; background: transparent; border: 0; cursor: pointer;');
			add('p', 'margin:1rem; font-size: 0.85rem; opacity: 0.5;');
			add('#add','font-family:\'VarelaRound\'; display:inline-block; padding:0 1rem; color:'+style.background+'; font-size:1rem; line-height:2rem; background-color:' + style.accent + '; cursor:pointer; border-radius:0.2rem;');
			add('#add:hover', 'background:'+style.textColor+';');
			add('#add .fa', 'line-height:3rem;');
			add('#footer', 'margin:0rem;');

		// lucille

			add('.lucille','margin:1px auto; display:inline-block; vertical-align:top;');

		// append
		theme.append(css);


	$('head').append(theme);

	return theme;

};