/**
 * Created by georginahughes on 28/04/15.
 */
module.exports = function (grunt){
    grunt.initConfig({
        concat: {
            dist: {
                src: ['modules/*.js', '!modules/*.spec.js'],
                dest: 'modules/dist/app.concat.js'
            }
        },
        ngAnnotate: {
            options:{
                add: true,
                remove: true,
                singleQuotes: true
            },
            dist: {
                files:{
                    'modules/dist/app.annotate.js': ['modules/dist/app.concat.js']
                }
            }
        },
        uglify: {
            dist: {
                options:{
                    beautify: true,
                    sourceMap: true,
                    screwIE8: true,
                    quoteStyle: 1
                },
                files:{
                    'modules/dist/app.min.js': ['modules/dist/app.annotate.js']
                }
            }
        },
        clean: ['modules/dist/app.concat.js', 'modules/dist/app.annotate.js'],

        watch: {
            src:{
                tasks: ['concat', 'ngAnnotate', 'uglify', 'clean'],
                files: ['modules/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'ngAnnotate', 'uglify', 'clean', 'watch']);
};