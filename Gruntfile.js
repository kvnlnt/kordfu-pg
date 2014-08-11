// Generated on 2014-05-01 using generator-webapp 0.4.6
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {
        cwd: path
    }).forEach(function(option) {
        key = option.replace(/\.js$/, '');
        object[key] = require(path + option);
    });

    return object;
}


module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // config
    var config = { pkg: grunt.file.readJSON('package.json'), env: process.env };

    // load options
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    // load configs
    grunt.initConfig(config);

    // load all tasks from tasks folder
    grunt.loadTasks('tasks');

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // default task
    grunt.registerTask('default', ['build']);

};
