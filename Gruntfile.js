module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    "css/main1.css" : "less/compile.less"
                }
            }
        },
        
        concat: {
            js: {
                src: ['js/vendors/jquery-2.1.4.js', 'js/main.js'],
                dest: "js/concat.js"
            }
        },
        
        uglify: {
            js: {
                src: ['js/concat.js'],
                dest: "js/uglify.js"
            }
        },
        
        // Watch files during development
        watch: {
            javascript: {
                files: ['js/**/*.js']
            },
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less:development']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:development', 'concat:js', 'uglify:js']);
};
