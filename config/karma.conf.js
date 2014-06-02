module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js',
      'app/bower_components/q/q2.js'
    ],
      
    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine', 'chai', 'chai-as-promised'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-mocha',
            'karma-chai',
            'karma-chai-plugins'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

});};
