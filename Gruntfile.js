/**
 *  ------------------------------------------------------------------------
 *  @project: grunt-ivantagetemplater
 *  @date: 2013-08-08
 *  @author: Justin Russell
 *
 *  Copyright (c) 2013, iVantage Health Analytics, Inc.
 *  ------------------------------------------------------------------------
*/

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['./test/tmp']
    },

    ivantagetemplater: {
      tester: {
				data: grunt.file.readJSON( 'package.json' ),
				templateRoot: './test/fixtures',
				templates: ['./test/fixtures/**/*.mustache'],
				destRoot: './test/tmp'
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'ivantagetemplater', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);
};
