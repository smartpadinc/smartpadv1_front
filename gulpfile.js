"use strict";

const gulp          = require('gulp');
const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const clean         = require('gulp-clean');
const bust          = require('gulp-buster');
const del           = require('del');
const flatten       = require('gulp-flatten');
const vinylPaths    = require('vinyl-paths');
const autoprefixer  = require('gulp-autoprefixer');
const cssmin        = require('gulp-cssmin');
// const buster        = new Bust({
//                         production: false,
//                       });


const sassInclude = {
  'bootstrap'   : 'node_modules/bootstrap-sass',
  'fontawesome' : 'node_modules/font-awesome',
};

gulp.task('default', function() {

});

/* Clean the whole build folder */
gulp.task('clean:build', function () {
  console.log("Cleaning old build folder...");
  return gulp.src('build/*')
  .pipe(vinylPaths(del));
});

/* Clean fonts folder on build dir */
gulp.task('clean:fonts', function() {
  console.log("Cleaning fonts folder...");
  return gulp.src([
    'build/fonts/'
  ])
  .pipe(vinylPaths(del));
});

/* Clean fonts folder on build dir */
gulp.task('clean:images', function() {
  console.log("Cleaning images folder...");
  return gulp.src([
    'build/images/'
  ])
  .pipe(vinylPaths(del));
});

/* Clean the whole app.sass */
gulp.task('clean:style', function () {
  console.log("Cleaning generated style...");
  return gulp.src('build/app.css')
  .pipe(vinylPaths(del));
});

gulp.task('clean:sass-main', function () {
  console.log("Cleaning main sass file...");
  return gulp.src('assets/app.scss')
  .pipe(vinylPaths(del));
});

/* Concatinate all sass files */
gulp.task('sass:concat',['clean:sass-main'], function() {
  console.log("(Development) Compiling all sass files...");

  return gulp.src([
    'assets/**/*.scss',
    '!assets/variables.scss',
  ])
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('assets'));
});

/*
  Compile/Minified all sass files from assets folder
  then generate the actual css files
*/
gulp.task('sass:build', function() {
  console.log("(Development) Rebuilding sass files...");
  return gulp.src('assets/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        sassInclude.bootstrap,
        sassInclude.fontawesome,
        'assets'
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('build'));
});

gulp.task('css:optimize', function () {
  console.log("(Development) Optimizing css...");
  return gulp.src('build/app.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('build'));
});

/* rebuild and compile everything from start */
gulp.task('sass:compile',['clean:build','sass:concat','mv:fonts','mv:images','sass:build','css:optimize'], function() {
  console.log("Assets compiled successfully");
});

/* Rebuild only the css related stuff */
gulp.task('sass:compile-fast',['clean:style','sass:concat','sass:build','css:optimize'], function() {
  console.log("Compiling assets quickly...");
});

/* rebuild and compile everything from start */
gulp.task('sass:production',['clean:build','sass:concat','mv:fonts','mv:images','sass:build','css:optimize','sass:cache-bust'], function() {
  console.log("Assets compiled successfully");
});


gulp.task('sass:watch-dev', function () {
  gulp.watch('assets/**/*.scss', ['sass:compile-fast']);
});

/*
  ## UTILITIES ##
*/

/* Move the all fonts folder  */
gulp.task('mv:fonts',['clean:fonts'], function() {
  console.log("(Development) Moving all fonts to build folder");
  return gulp.src([
    'node_modules/bootstrap-sass/assets/fonts/bootstrap/**',
    'node_modules/font-awesome/fonts/**',
    'assets/**/*.{ttf,woff,woff2,eof,svg}',
  ])
  .pipe(flatten())
  .pipe(gulp.dest('build/fonts',{overwrite: true}));
});

/* Move the all images  */
gulp.task('mv:images',['clean:images'], function() {
  console.log("(Development) Moving all images to build folder");
  return gulp.src([
    'assets/**/*.{jpg,jpeg,png,tif}',
  ])
  .pipe(flatten())
  .pipe(gulp.dest('build/images',{overwrite: true}));
});

/* ongoing function */
gulp.task('bust', function () {
  console.log("Cache busting assets...");
  return gulp.src('./build/app.css')
    .pipe(bust({
      fileName: 'build-manifest.json',
      length: 15
    }))
    .pipe(gulp.dest('./build'));
});
