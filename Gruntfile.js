module.exports = function(grunt) {

    // Grunt config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Concat files.
        concat: {
            dist: {
                src: [
                    'src/js/*.js',
                ],
                dest: 'public/js/production.js',
            }
        },

        // Minify the JS.
        uglify: {
            build: {
                src: 'public/js/production.js',
                dest: 'public/js/production-min.js'
            }
        },

        // Compile the sass to css.
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/style.css': 'sass/main-styles.sass'
                }
            }
        }

    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks
    grunt.registerTask('default', ['concat', 'uglify', 'sass']);


};
