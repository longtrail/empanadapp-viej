module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular*/angular*.js',
      'test/lib/angular/angular-mocks.js',
      'app/bower_components/lodash/dist/lodash.js',
      'app/js/**/*.js',
      'test/unit/**/*Spec.js'
    ],
      
    exclude : [
    'app/bower_components/angular*/angular*.min*',
    'app/bower_components/angular-i18n/*'
    ],

    autoWatch : true,

    frameworks: ['mocha','chai'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-chai',
            'phantomjs'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

});};
