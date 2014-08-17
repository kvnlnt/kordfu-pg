module.exports = {

    html: {
        src: 'index.html',
        dest: 'phonegap/www/index.html'
    },

    fonts:{
        expand: true, 
        src: ['fonts/**'], 
        dest: 'phonegap/www'
    },

    plukit: {
        cwd:'modules/plukit',
        src:'*.mp3',
        dest: 'phonegap/www/modules/plukit',
        flatten:true,
        expand:true
    }
    
}

