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

			add('html, body', 'margin:0; padding:0; width:100%; height:100%;');
			add('body','background: '+style.background + '; text-align:center;');

		// header

			add('nav', 'color:'+style.textColor);
			add('nav', 'font-family:\'VarelaRound\';');
			add('nav', 'line-height: 3rem;');
			add('nav', 'height:0');
			add('nav', 'text-align:center; margin:0; cursor:pointer;');
			add('nav h1', 'margin:0; display:inline-block;');
			add('nav button', 'font-family:FontAwesome; margin:0 1rem; font-size: 1rem; color: #FFFFFF; background: transparent; border: 0; cursor: pointer;');
			add('#add','display:inline-block; opacity:0.25; width:3rem; height:3rem; font-size:1.5rem; line-height:3rem; background-color:' + style.textColor + '; cursor:pointer; border-radius:3rem;');
			add('#add:hover', 'opacity:1;');
			add('#add .fa', 'line-height:3rem;');
			add('#addWrapper', 'margin:2rem;');

		// lucille

			add('.lucille','margin:1px auto; display:inline-block; vertical-align:top;');

		// append
		theme.append(css);


	$('head').append(theme);

	return theme;

};