const gulp = require('gulp');
const babel = require('gulp-babel');
const flatten = require('gulp-flatten');

gulp.task('default', () =>
    gulp.src(['src/**/*.js', '!src/**/__tests__/*.js'])
        .pipe(flatten())
        .pipe(babel())
        .pipe(gulp.dest('lib'))
);
