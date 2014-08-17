module.exports = function(grunt) {

    // simple build task
    grunt.registerTask('build', [
        'useminPrepare',
        'copy:html',
        'copy:samples',
        'copy:fonts',
        'concat:generated',
        'uglify:generated',
        'usemin'
    ]);
    
};