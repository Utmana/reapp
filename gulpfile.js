'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var cache = require('gulp-cached');
var pkg = require('./package');
var jshintConfig = pkg.jshintConfig;

var PATH = {
  HTML: './index.html',
  SOURCE: './app/',
  TEST: './__tests__/'
};

gulp.task('jshint', function () {
  var stream = gulp.src(PATH.SOURCE + '*.js')
    .pipe(cache('jshint'))
    // .pipe(react()).on('error', handleErr)
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));

  if (process.env.CI) {
    stream = stream.pipe(jshint.reporter('fail'));
  }
  return stream;
});

gulp.task('run', shell.task('reapp run'));

gulp.task('build', shell.task('reapp build'));

gulp.task('watch', function () {
  gulp.watch([PATH.SOURCE + '**/*.js', PATH.SOURCE + '**/*.jsx', PATH.TEST + '**/*.js'], ['jshint', 'jest']);
});

gulp.task('jest', shell.task('node --harmony ./node_modules/.bin/jest'));

gulp.task('test', ['jest', 'watch']);

gulp.task('default', ['run']);
