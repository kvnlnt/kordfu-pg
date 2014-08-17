module.exports = function(grunt) {

    // simple build task
    grunt.registerTask('build', [
        'useminPrepare',
        'copy:html',
        'copy:plukit',
        'copy:fonts',
        'concat:generated',
        'uglify:generated',
        'usemin'
    ]);

    grunt.registerTask('phonegap',['build','exec'])
    
};