var babelify = require('babelify'),
  browserify = require('browserify'),
  config = require('../config').browserify,
  factor = require('factor-bundle'),
  fs = require('fs'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  handleErrors = require('../util/handleErrors'),
  path = require('path'),
  source = require('vinyl-source-stream'),
  watchify = require('watchify');

var scnEntries = ["bootstrap.jsx"];
var srcEntries = [];
var dstEntries = [];

var tranSrc = function(entries) {
  entries.forEach(function(entrie) {
    var p = config.src + "//" + entrie;
    srcEntries.push(p);
  });
};

var tranDst = function(entries) {
  entries.forEach(function(entrie) {
    var p = config.dest + "//" + entrie;
    if (p.substr(-4) == ".jsx") {
      p = p.substr(0, p.length - 1);
    }
    dstEntries.push(p);
  });
};

var getFolders = function(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

var folders = getFolders(config.src);

var files = folders.map(function(folder) {
  if (folder == "shared") return;
  var files = fs.readdirSync(path.join(config.src, folder));
  for (var i in files) {
    scnEntries.push(path.join(folder, files[i]));
  }
});

tranSrc(scnEntries);
tranDst(scnEntries);

// build
gulp.task('build', function() {
  var bundler = watchify(browserify({
    cache: {},
    packageCache: {},
    entries: srcEntries,
    debug: config.debug
  }));

  bundler.transform(babelify.configure({
    stage: 1
  }));

  var bundlerFun = function() {
    return bundler.plugin(factor, {
        // File output order must match entry order
        o: dstEntries
      })
      .bundle()
      .on('error', handleErrors)
      .pipe(source('common.js'))
      .pipe(gulp.dest(config.dest));
  };

  bundler.on('update', bundlerFun); // on any dep update, runs the bundler
  bundler.on('log', gutil.log); // output build logs to terminal

  return bundlerFun();
});