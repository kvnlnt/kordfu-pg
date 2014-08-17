module.exports = {

    html: {
        src: 'index.html',
        dest: 'phonegap/www/index.html'
    },

    fonts:{
        expand: true, 
        src: ['fonts/**'], 
        dest: 'phonegap/www/fonts/'
    },

    samples: {
        cwd:'modules/plukit',
        src:'*.mp3',
        dest: 'phonegap/www/samples/',
        flatten:true,
        expand:true
    }
    
}

