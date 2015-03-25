'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('run', shell.task('reapp run'));

gulp.task('jest', shell.task('node --harmony ./node_modules/.bin/jest'));

gulp.task('build', shell.task('reapp build'));

gulp.task('default', ['run']);
