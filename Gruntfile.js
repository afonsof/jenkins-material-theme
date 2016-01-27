module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({


        clean: {
            dist: {
                src: ["dist/"]
            }
        },

        less: {
            dist: {
                files: {
                    "dist/material-light.css": "less/style.less",
                    "dist/material-dracula.css": "less/dracula.less"
                }
            }
        },

        imageEmbed: {
            light: {
                src: ["dist/material-light.css"],
                dest: "dist/material-light.css",
                options: {
                    deleteAfterEncoding: false
                }
            },
            dracula: {
                src: ["dist/material-dracula.css"],
                dest: "dist/material-dracula.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },

        cssmin: {
            minify: {
                files: {
                    'dist/material-light.css': ['dist/material-light.css'],
                    'dist/material-dracula.css': ['dist/material-dracula.css']
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{removeViewBox: true}]
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.svg'],
                    dest: 'images/'
                }]
            }

        },

        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'version',
                            replacement: pkg.version
                        }
                    ]
                },
                files: [
                    {src: ['dist/material-light.css'], dest: 'dist/material-light.css'},
                    {src: ['dist/material-dracula.css'], dest: 'dist/material-dracula.css'}
                ]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'imageEmbed', 'replace', 'cssmin']);


};