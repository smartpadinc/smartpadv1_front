"use strict";

const gulp   = require('gulp');
const sass   = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('./assets/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:compile-dev', function() {
  console.log("(Development) Compiling all sass files...");
  return gulp.src('./assets/**/*.scss')
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('sass:build-dev', function() {
  console.log("(Development) Rebuilding sass file...")
  return gulp.src('./assets/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('compile',['sass:compile-dev','sass:build-dev'], function() {
  console.log("Assets compiled successfully");
});

gulp.task('sass:watch-dev', function () {
  gulp.watch('./sass/**/*.scss', ['default']);
});
