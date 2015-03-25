'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var cache = require('gulp-cached');
var s3 = require('gulp-s3');
var pkg = require('./package');
var jshintConfig = pkg.jshintConfig;
var awsConfig = require('./aws');


var PATH = {
  HTML: './index.html',
  SOURCE: './app/',
  TEST: './__tests__/'
};

gulp.task('jshint', function () {
  var stream = gulp.src(PATH.SOURCE + '*.js')
    .pipe(cache('jshint'))
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));

  if (process.env.CI) {
    stream = stream.pipe(jshint.reporter('fail'));
  }
  return stream;
});

gulp.task('run', shell.task('reapp run'));

gulp.task('build', ['jest'], shell.task('reapp build'));

gulp.task('watch', function () {
  gulp.watch([PATH.SOURCE + '**/*.js', PATH.SOURCE + '**/*.jsx', PATH.TEST + '**/*.js'], ['jshint', 'jest']);
});

gulp.task('s3', ['build'], function () {
  awsConfig.key = process.env.AWS_ACCESS_KEY_ID;
  awsConfig.secret = process.env.AWS_SECRET_ACCESS_KEY;
  gulp.src('./build/**')
    .pipe(s3(awsConfig));
});

gulp.task('jest', shell.task('node --harmony ./node_modules/.bin/jest'));

gulp.task('test', ['jest', 'watch']);

gulp.task('default', ['run']);

gulp.task('deploy', ['s3']);
