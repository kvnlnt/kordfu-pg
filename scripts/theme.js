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

		// splash

			add('#splash', 'width:100%; height:100%; position:fixed; top:0; left:0; z-index:2; background:#FFFFFF; ');
			add('#cover', ' font-family:\'VarelaRound\'; position: absolute; width: 200px; height: 200px; top: 50%; left: 50%; margin-left: -100px; margin-top: -100px;​');
			add('#cover h1', 'font-size:4rem; letter-spacing:-0.2rem;');
			add('#cover h1, p', 'margin:0;');
			add('#cover p', 'color:#CCCCCC;');

		// lucille

			add('.lucille','margin:1px auto; display:inline-block; vertical-align:top;');
			add('.lucille', 'border:1px solid #333333');

		// footer

			add('#footer', 'margin:0rem; color:'+style.textColor+'; font-family:\'VarelaRound\';');
			add('#footer a', 'color:'+style.textColor+';');
			add('#add','display:inline-block; padding:0 1rem; margin:1rem; color:'+style.background+'; font-size:1rem; line-height:2rem; background-color:' + style.accent + '; cursor:pointer; border-radius:0.2rem;');
			add('#add:hover', 'color:#000000; background:'+style.textColor+';');
			add('#add .fa', 'line-height:3rem;');
			add('#footer p', 'margin:1rem; font-size: 0.85rem; opacity: 0.5;');

		// append
		theme.append(css);


	$('head').append(theme);

	return theme;

};