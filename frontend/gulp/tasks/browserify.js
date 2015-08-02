var assign = require('lodash.assign'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    //buffer = require('vinyl-buffer'),
    config = require('../config').browserify,
    factor = require('factor-bundle'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream'),
    //sourcemaps = require('gulp-sourcemaps'),
    watchify = require('watchify');

// add custom browserify options here
var customOpts = {
  // Required watchify args
  //cache: {}, packageCache: {}, fullPaths: false,
  entries: tranSrc(config.entries),
  debug: config.debug
};
//var opts = assign({}, watchify.args, customOpts);
//var b = watchify(browserify(opts));

var opts = customOpts;
var b = browserify(opts);

// add transformations here
// i.e. b.transform(coffeeify);
b.transform(babelify.configure({stage: 1}));

gulp.task('browserify', bundler); // so you can run `gulp js` to build the file
b.on('update', bundler); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundler() {
  return b.plugin(factor, {
        // File output order must match entry order
        o: tranDist(config.entries)
    })
    .bundle()
    // log errors if they happen
    // .on('error', handleErrors)
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('common.js'))
    // optional, remove if you don't need to buffer file contents
    //.pipe(buffer())
    // optional, remove if you dont want sourcemaps
    //.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    //.pipe(sourcemaps.write(config.dest)) // writes .map file
    .pipe(gulp.dest(config.dest));
}

function tranSrc(entries) {
    srcs = [];
    entries.forEach(function(entrie){
        var p = config.src+"/"+entrie;
        srcs.push(p);
    });
    return srcs;
};

function tranDist(entries) {
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
