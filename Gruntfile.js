module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                mangle: true,
                report: 'min'
            },
            build: {
                files: {
                    'build/output.min.js': ['app.js']
                }
            }
        },
        copy: {
            views: {
                files: [
                    {
                        src: [
                            'app.js',
                            'style.css'
                        ],
                        dest: 'build/'
                    }
                ]
            }

        },
        cssmin: {
            minify: {
                files: {
                    'build/styles.css': ['build/styles.css']
                }
            }
        },
        clean: {
            build: {
                src: ["build/"]
            }
        },
        rev: {
            files: {
                src: ['build/*.{js,css}']
            }
        },
        jshint: {
            files: ['*.js']
        },
        less: {
            development: {
                files: {
                    "build/styles.css": "less/style.less"
                }
            }
        },
        imageEmbed: {
            dist: {
                src: ["build/styles.css"],
                dest: "build/styles.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify', 'less', 'imageEmbed', 'cssmin', 'rev', 'jshint']);


};