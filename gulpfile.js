
'use strict';

var gulp = require('gulp');
var minifyCSS = require("gulp-minify-css");
var minifyJS = require("gulp-uglify");

// css minify
gulp.task('minifyCSS', function () {
    return gulp.src('./client/styles/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/minifyCss'));
});

//js minify
gulp.task('minifyJS', function () {
    return gulp.src('./client/components/**/*.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./build/minify/'));
});