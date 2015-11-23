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
                    "dist/styles.css": "less/style.less"
                }
            }
        },

        imageEmbed: {
            dist: {
                src: ["dist/styles.css"],
                dest: "dist/styles.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },

        cssmin: {
            minify: {
                files: {
                    'dist/styles.css': ['dist/styles.css']
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'imageEmbed', 'cssmin']);


};