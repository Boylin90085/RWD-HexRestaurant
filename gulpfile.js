var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');


gulp.task('pug', function buildHTML() {
    return gulp.src('./*.pug')
        .pipe(plumber())
        .pipe(pug({
        pretty: true
        }))
        .pipe(gulp.dest('./'));
  });


gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./*.pug', ['pug']);
  gulp.watch('./*.sass', ['sass']);
});

gulp.task('default', ['pug', 'sass', 'watch'])