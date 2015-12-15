module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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

        uglify: {
            firefox_polyfill: {
                files: {
                    'dist/firefox-polyfill.min.js': ['js/firefox-polyfill.js']
                }
            }
        }

    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'imageEmbed', 'cssmin', 'uglify']);


};