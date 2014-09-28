module.exports = function(grunt) {

    grunt.initConfig({
        jsbeautifier: {
            files: [
                "**/*.js",
                "!**/node_modules/**/*"
            ]
        },
        jshint: {
            options: {
                es3: true,
                curly: false,
                eqeqeq: true,
                expr: true,
                eqnull: true,
                evil: true
            },
            files: [
                "**/*.js",
                "!**/node_modules/**/*"
            ]
        }
    });

    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.registerTask("default", ["jsbeautifier", "jshint"]);
};
