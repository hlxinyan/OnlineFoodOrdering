/*jslint node: true */
"use strict";


module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        src: 'app/index.html',
        dest: 'dist/index.html'
      }
    },

    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: ['dist/index.html']
    },

    jshint: {
      all: [ 'Gruntfile.js', 'app/*.js', 'app/js/*.js' ]
    },
    uglify: {
      options: {
        report: 'min',
        mangle: false
      }
    },
    clean: {
      temp: {
        src: [ 'tmp' ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('default', [ 'jshint', 'clean','copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin' ]);

};
