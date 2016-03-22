module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      lintspaces: {
        all: {
          src: ['Gruntfile.js', 'routes/*.js', 'app.js'],
          options: {
            newline: true,
            newlineMaximum: 2,
            trailingspaces: true,
            indentation: 'spaces',
            spaces: 2
          }
        }
      },
      jshint: {
        all: ['Gruntfile.js', 'routes/*.js', 'app.js', 'public/**/*.js']
      },
      watch: {
        configFiles: {
          files: [ 'Gruntfile.js', 'routes/*.js', 'app.js' ],
          tasks: ['jshint'],
          options: {
            reload: true
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-lintspaces');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['lintspaces','jshint', 'watch']);

  };