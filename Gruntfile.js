module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            build: {
                src: ['dest']
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'style/*.css'
            }
        },

        jscs: {
            src: "app/**/*.js",
            options: {
                config: ".jscsrc",
                esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
                verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
                fix: true, // Autofix code style violations when possible.
                requireCurlyBraces: [ "if" ]
            }
        },




        concat: {
            options: {
            },
            dist: {
                src: ['app/app.component.js', 'app/main.js'],
                dest: 'dest/output.js'
            }
        },
        jshint: {
            options: {
                esversion: 6
            },
            beforeconcat: ['Gruntfile.js', 'app/**/*.js'],
            afterconcat: ['dest/output.js'],
            afteruglify: ['dest/output.min.js']
        },
        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    'dest/output.js': 'dest/output.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dest/output.min.js': 'dest/output.js'
                }
            }
        },
        watch: {
            js: {
                files: ['app/**/*.js'],
                tasks: ['default']
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-postcss');

    grunt.loadNpmTasks("grunt-jscs");

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'clean',
        'postcss:dist',
        'jshint:beforeconcat',
        'concat',
        'jshint:afterconcat',
        'babel',
        'uglify'
    ]);
};
