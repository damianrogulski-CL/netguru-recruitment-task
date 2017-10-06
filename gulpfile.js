var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//gulpfile.js

gulp.task('sass', function() {
  gulp
    .src('styles/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles/css'));
})

gulp.task('watch', function() {
  gulp.watch('styles/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
