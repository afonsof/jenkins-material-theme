module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                mangle : true,
                compress : true,
                report: 'min'
            },
            build : {

            }
        },
        useminPrepare : {
            html : 'index.html',
            options : {
                dest : 'build/'
            }
        },
        usemin : {
            html : ['build/index.html'],
            options : {
                basedir : '/'
            }
        },
        copy : {
            views : {
                files : [
                    {
                        src  : [
                            'app/**/*.html',
                            'index.html',
                            'vendor/**/*',
                            'css/**/*'
                        ],
                        dest : 'build/'
                    }
                ]
            }

        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');

    // Default task(s).
    grunt.registerTask('default', ['useminPrepare','concat','copy','usemin','uglify']);


};