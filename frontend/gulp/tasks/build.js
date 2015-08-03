var babelify = require('babelify'),
    browserify = require('browserify'),
    config = require('../config').browserify,
    factor = require('factor-bundle'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream');
    watchify = require('watchify');

gulp.task('build', function(){
    var tranSrc = function(entries) {
        srcs = [];
        entries.forEach(function(entrie){
            var p = config.src+"/"+entrie;
            srcs.push(p);
        });
        return srcs;
    };

    var tranDist = function(entries) {
        dists = [];
        entries.forEach(function(entrie){
            var p = config.dest+"/"+entrie;
            if(p.substr(-4) == ".jsx"){
                p = p.substr(0, p.length-1);
            }
            dists.push(p);
        });
        return dists;
    };

    var bundler = watchify(browserify({
        cache: {}, packageCache: {},
        entries: tranSrc(config.entries),
        debug: config.debug
    }));

    bundler.transform(babelify.configure({stage: 1}));

    var bundlerFun = function() {
        return bundler.plugin(factor, {
            // File output order must match entry order
            o: tranDist(config.entries)
        })
        .bundle()
        .on('error', handleErrors)
        .pipe(source('shared/common.js'))
        .pipe(gulp.dest(config.dest));
    };

    bundler.on('update', bundlerFun); // on any dep update, runs the bundler
    bundler.on('log', gutil.log); // output build logs to terminal

    return bundlerFun();
});
