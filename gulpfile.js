"use strict";

const gulp   = require('gulp');
const sass   = require('gulp-sass');
const concat = require('gulp-concat');
const clean  = require('gulp-clean');
const Bust   = require('gulp-bust');
const buster = new Bust({ production: true });

gulp.task('default', function() {

});

gulp.task('clean-build', function () {
    console.log("Cleaning old build folder...");
    return gulp.src("./build").pipe(clean({force: true}))
});

gulp.task('sass:concat', function() {
  console.log("(Development) Compiling all sass files...");
  return gulp.src('./assets/**/*.scss')
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('sass:build', function() {
  console.log("(Development) Rebuilding sass file...")
  return gulp.src('./assets/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:cache-bust', function () {
  return gulp.src('./build/app.css')
    .pipe(buster.resources())
    .pipe(gulp.dest('./build/bust'));
});

gulp.task('sass:compile',['clean-build','sass:concat','sass:build'], function() {
  console.log("Assets compiled successfully");
});

gulp.task('sass:watch-dev', function () {
  gulp.watch('./sass/**/*.scss', ['sass:compile']);
});
