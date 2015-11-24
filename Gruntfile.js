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
                    "dist/theme-light.css": "less/style.less",
                    "dist/theme-dracula.css": "less/dracula.less"
                }
            }
        },

        imageEmbed: {
            light: {
                src: ["dist/theme-light.css"],
                dest: "dist/theme-light.css",
                options: {
                    deleteAfterEncoding: false
                }
            },
            dracula: {
                src: ["dist/theme-dracula.css"],
                dest: "dist/theme-dracula.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },

        cssmin: {
            minify: {
                files: {
                    'dist/theme-light.css': ['dist/theme-light.css'],
                    'dist/theme-dracula.css': ['dist/theme-dracula.css']
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

        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'imageEmbed', 'cssmin']);


};