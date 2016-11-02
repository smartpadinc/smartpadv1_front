"use strict";

const gulp   = require('gulp');
const sass   = require('gulp-sass');
const concat = require('gulp-concat');
const clean  = require('gulp-clean');
const Bust   = require('gulp-bust');
const buster = new Bust({ production: true });

const components = {
  'bootstrap'   : 'node_modules/bootstrap-sass',
  'fontawesome' : 'node_modules/font-awesome',
};

gulp.task('default', function() {

});

gulp.task('clean-build', function () {
    console.log("Cleaning old build folder...");
    return gulp.src("./build").pipe(clean({force: true}))
});

gulp.task('cp:components', function () {
  console.log("(Development) Copy components");
  return gulp.src([
    components.bootstrap + '/**',
    components.fontawesome + '/**',
  ],{"base":"./node_modules/"})
  .pipe(gulp.dest('assets/components'));
});

gulp.task('sass:compile-lib', function () {
  console.log("(Development) Copy components");
  return gulp.src('./assets/lib.scss')
  .pipe(sass({includePaths: ['./assets/components']}))
  .pipe(gulp.dest('./build/'))
});

gulp.task('sass:concat',['clean-build','cp:components'], function() {
  console.log("(Development) Compiling all sass files...");
  return gulp.src([
    './assets/common/**/*.scss',
    './assets/lib.scss',
  ])
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass:build', ['sass:concat'], function() {
  console.log("(Development) Rebuilding sass file...")
  return gulp.src('./build/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['./assets/components','./assets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:cache-bust', function () {
  return gulp.src('./build/app.css')
    .pipe(buster.resources())
    .pipe(gulp.dest('./build/bust'));
});

gulp.task('sass:compile',['clean-build','cp:components','sass:concat','sass:build'], function() {
  console.log("(Development) Assets compiled successfully");
});

gulp.task('sass:watch-dev', function () {
  gulp.watch('./assets/**/*.scss', ['sass:compile']);
});
