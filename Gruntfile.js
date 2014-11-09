/*global module:false*/
/*jslint node: true */
module.exports = function(grunt) {

  var tempConcatOptions = {
    banner: "angular.module('app')",
    footer: ';\n',
    process: function(src) {
      var newSrc = src.replace(/angular\.module\(['"]?\w*['"]?\);?/, '');
      newSrc = newSrc.replace(/}]\);\s*$/, '}])');
      return newSrc;
    }
  };

  var appConcatOptions = {
    footer: ';',
    process: function(src) {
      var newSrc = src.replace(/angular\.module\(['"]?\w*['"]?\);?/, '');
      newSrc = newSrc.replace(/;\s*$/, '');
      return newSrc;
    }
  };

  // load tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    concat: {
      controllers: {
        src: "src/controllers/*.js",
        dest: "src/temp/controllers.js",
        options: tempConcatOptions
      },
      services: {
        src: "src/services/*.js",
        dest: "src/temp/services.js",
        options: tempConcatOptions
      },
      directives: {
        src: "src/directives/*.js",
        dest: "src/temp/directives.js",
        options: tempConcatOptions
      },
      filters: {
        src: "src/filters/*.js",
        dest: "src/temp/filters.js",
        options: tempConcatOptions
      },
      app: {
        src: ['src/app.js', 'src/temp/*.js' ],
        dest: 'build/js/app.js',
        options: appConcatOptions
      }
    },

    clean: [ 'src/temp/' ],

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        browser: true,
        laxcomma: true,
        ignores: ['src/temp/*.js'],
        globals: {
          'angular': false,
          'module': false,
          'require': false
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['src/**/*.js']
      },
      build: {
        src: ['build/js/**/*.js']
      }
    },

    watch: {

      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: ['src/**/*.js'],
        tasks: ['concat-src']
      }
    }
  });

  grunt.registerTask('concat-src', ['jshint:src', 'concat:controllers', 'concat:services', 'concat:directives',
                     'concat:filters', 'concat:app', 'clean', 'jshint:build']);

  // Default task.
  grunt.registerTask('default', ['concat-src']);

};
