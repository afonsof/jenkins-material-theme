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
                    "dist/material-static.css": "less/static.less"
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
            static: {
                src: ["dist/material-static.css"],
                dest: "dist/material-static.css",
                options: {
                    deleteAfterEncoding: false
                }
            }
        },

        cssmin: {
            minify: {
                files: {
                    'dist/material-light.css': ['dist/material-light.css'],
                    'dist/material-static.css': ['dist/material-static.css']
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
                        },
                        {
                            match: /material-theme<\/artifactId>\s+<version>[^>]*<\/version>/g,
                            replacement: 'material-theme</artifactId>\n    <version>' + pkg.version + '</version>'
                        }
                    ]
                },
                files: [
                    {src: ['dist/material-light.css'], dest: 'dist/material-light.css'},
                    {src: ['dist/material-static.css'], dest: 'dist/material-static.css'},
                    {src: ['plugin/pom.xml'], dest: 'plugin/pom.xml'}
                ]
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    //require('pixrem')(), // add fallbacks for rem units
                    //require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'dist/material*.css'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'imagemin', 'imageEmbed', 'replace', 'cssmin', 'postcss']);


};