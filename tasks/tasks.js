module.exports = function(grunt) {

    grunt.registerTask('compile', ['concat:libs','copy:plukit']);
    
};