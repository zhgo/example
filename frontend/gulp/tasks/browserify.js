var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    config = require('../config').browserify,
    factor = require('factor-bundle');

gulp.task('browserify', function(){

    return browserify({
        entries: ['./src/app/app.jsx', './src/app/x.js', './src/app/y.js'],
        debug: config.debug
    })
    .plugin(factor, {
        // File output order must match entry order
        o: ['./bundle/app/app.js', './bundle/app/x.js', './bundle/app/y.js']
    })
    .bundle()
    .pipe(source('app/common.js'))
    .pipe(gulp.dest('./bundle'));
});