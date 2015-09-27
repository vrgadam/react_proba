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
                tasks: ['less']
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
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('serve', ['less', 'browserify', 'connect', 'watch']);


};
