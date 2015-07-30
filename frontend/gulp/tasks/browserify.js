var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    handleErrors = require('../util/handleErrors'),
    browserify = require('browserify'),
    config = require('../config').browserify,
    factor = require('factor-bundle'),
    babelify = require('babelify');

gulp.task('browserify', function(){

    var bundler = browserify({
        entries: ['./src/app/app1.jsx', './src/app/app2.jsx', './src/app/x.js', './src/app/y.js'],
        debug: config.debug
    });

    bundler.transform(babelify.configure({stage: 1}));

    return bundler.plugin(factor, {
        // File output order must match entry order
        o: ['./bundle/app/app1.js', './bundle/app/app2.js', './bundle/app/x.js', './bundle/app/y.js']
    })
    .bundle()
    .on('error', handleErrors)
    .pipe(source('app/common.js'))
    .pipe(gulp.dest('./bundle'));
});