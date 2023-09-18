module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
      less: {
        dist: {
          files: {
            'dist/style.css': 'src/styles/styles.less'
          }
        }
      },
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'dist/style.min.css': ['dist/style.css']
          }
        }
      },
      clean: ['dist/style.css', 'dist/style.css.map'],
      watch: {
        options: {
          livereload: true,
        },
        css: {
          files: ['src/styles/styles.less'], //отслеживаем
          tasks: ['less', 'cssmin', 'clean'],
        },
      },
    });
  
  
  
    // Load the plugin .
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['watch']);
  };