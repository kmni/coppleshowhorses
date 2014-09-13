module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // kompilace compass
        compass: {
            watch: {
            }
        },

        // kompilace sass
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: { 'styles/style.min.css': 'styles/style.min.scss' }
            }
        },

        // pravidla pro automatickou kompilaci
        watch: {
            css: {
                files: ["**/*.scss", "gruntfile.js"],
                tasks: ["compass"],
                //tasks: ["sass"],
                options: { livereload: true, atBegin: true }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["watch"]);
}