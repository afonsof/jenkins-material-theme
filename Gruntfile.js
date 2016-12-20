module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    var colors = {
        'red': '#F44336',
        'pink': '#E91E63',
        'purple': '#9C27B0',
        'deep-purple': '#673AB7',
        'indigo': '#3F51B5',
        'blue': '#2196F3',
        'light-blue': '#039BE5',
        'cyan': '#0097A7',
        'teal': '#26A69A',
        'green': '#43A047',
        'light-green': '#689F38',
        'lime': '#AFB42B',
        'yellow': '#FBC02D',
        'amber': '#FF6F00',
        'orange': '#EF6C00',
        'deep-orange': '#FF5722',
        'brown': '#795548',
        'grey': '#757575',
        'blue-grey': '#607D8B'
    };

    var fileCreatorTask = {};
    var lessFiles = {
        "dist/material-light.css": "less/style.less",
        "dist/material-static.css": "less/static.less"
    };

    var replaceFiles = [
        {src: ['dist/material-light.css'], dest: 'dist/material-light.css'},
        {src: ['dist/material-static.css'], dest: 'dist/material-static.css'},
        {src: ['plugin/pom.xml'], dest: 'plugin/pom.xml'}
    ];

    var cssMinFiles = {
        'dist/material-light.css': ['dist/material-light.css'],
        'dist/material-static.css': ['dist/material-static.css']
    };

    for (var name in colors) {
        var color = colors[name];

        fileCreatorTask['.tmp/' + name + '.less'] = new Function('fs', 'fd', 'done', '{\
            fs.writeFileSync(fd, \'@import "../less/style";@color-primary:' + color + ';@color-link:' + color + ';\');\
            done();\
        }');
        var distFile = 'dist/material-' + name + '.css';

        lessFiles[distFile] = '.tmp/' + name + '.less';
        replaceFiles.push({src: [distFile], dest: distFile});
        cssMinFiles[distFile] = distFile
    }


    grunt.initConfig({
        "file-creator": {
            dist: fileCreatorTask
        },

        clean: {
            dist: {
                src: ["dist/*"]
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{
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

        less: {
            dist: {
                files: lessFiles
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
                files: replaceFiles
            }
        },

        cssmin: {
            minify: {
                files: cssMinFiles
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
        },

        imageEmbed: {
            light: {
                src: ["dist/material-light.css"],
                dest: "dist/material-light.css",
                options: {
                    deleteAfterEncoding: false
                }
            }, light_blue: {
                src: ["dist/material-light-blue.css"],
                dest: "dist/material-light-blue.css",
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

        fileExists: {
            scripts: Object.keys(lessFiles)
        }

    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'file-creator', 'imagemin', 'less', 'replace', 'cssmin', 'postcss']);
    grunt.registerTask('test', ['default', 'fileExists']);


};
