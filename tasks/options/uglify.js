module.exports = {
    dist: {
		options: {
			beautify : {
			    ascii_only : true
			} 		
		},
		files: {
			'dist/lucille.min.js': ['dist/lucille.js']
		}
    }
}