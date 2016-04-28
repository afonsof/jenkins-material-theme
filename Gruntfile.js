module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({


        clean: {
            dist: {
                src: ["dist/*"]
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
                    svgoPlugins: [{
                        removeViewBox: true,
                        removeDoctype: true,
                        removeXMLProcInst: true,
                        removeComments: true,
                        removeMetadata: true,
                        removeTitle: true,
                        removeDesc: true,
                        removeUselessDefs: true,
                        removeEditorsNSData: true,
                        removeEmptyAttrs: true,
                        removeHiddenElems: true,
                        removeEmptyText: true,
                        removeEmptyContainers: true,
                        removeViewBox: true,
                        cleanUpEnableBackground: true,
                        minifyStyles: true,
                        convertStyleToAttrs: true,
                        convertColors: true,
                        convertPathData: true,
                        convertTransform: true,
                        removeUnknownsAndDefaults: true,
                        removeNonInheritableGroupAttrs: true,
                        removeUselessStrokeAndFill: true,
                        removeUnusedNS: true,
                        cleanupIDs: true,
                        cleanupNumericValues: true,
                        moveElemsAttrsToGroup: true,
                        moveGroupAttrsToElems: true,
                        collapseGroups: true,
                        removeRasterImages: true,
                        mergePaths: true,
                        convertShapeToPath: true,
                        sortAttrs: true,
                        transformsWithOnePath: true,
                        removeDimensions: true,
                        removeAttrs: true,
                        addClassesToSVGElement: true,
                        removeStyleElement: true
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'node_modules/jenkins-core-theme/images/',
                    src: ['**/*.svg'],
                    dest: 'node_modules/jenkins-core-theme/images/'
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
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('postcss-encode-base64-inlined-images'),
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'dist/material*.css'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'imagemin', 'less', 'replace', 'cssmin', 'postcss']);


};
