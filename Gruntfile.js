module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    sourceMap: false,
                    cleancss: false
                },
                files: {
                    './www/reactproba.css': ['./src/styles/less/main.less']
                }
            }
        },
        bump: {
            options: {
                prereleaseName: 'rc'
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            less: {
                files: ['**/*.less'],
                tasks: ['less', 'concat']
            },
            js: {
                files: ['./src/scripts/**/*.js'],
                tasks: ['browserify']
            },
            html: {
                files: ['**/*.html']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './www/',
                    hostname: 'localhost'
                }
            }
        },
        browserify: {
            build: {
                src: ['./src/scripts/main.js'],
                dest: './www/reactproba.js',
                options: {
                    transform: ['reactify']
                }
            }
        },
        concat: {
            css: {
                src: ['./www/reactproba.css', './node_modules/skeleton-css/css/normalize.css', './node_modules/skeleton-css/css/skeleton.css'],
                dest: './www/reactproba.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('serve', ['less', 'concat', 'browserify', 'connect', 'watch']);


};
