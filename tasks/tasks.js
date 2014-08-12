module.exports = function(grunt) {

    grunt.registerTask('compile', ['uglify:plukit','concat:libs','copy:plukit']);
    
};