/*#################################
/   For use install:    npm install --save-dev run-sequence,
/                       npm install --save-dev del
/
/   For RUN:            gulp build
/##################################*/


// Global variables
var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence').use(gulp);
var del = require('del');


// Concat and copy *.styles files to build directory
gulp.task('concat-copy-to-build:styles', function() {
    return gulp.src('./src/styles/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build/styles'))
});


// Copy .html file to build directory
gulp.task('copy-to-build:html', function() {
    return gulp.src('./src/templates/*.html')
        .pipe(gulp.dest('./build'))
});


// Clean /build directory
gulp.task('build-clean', function() {
    return del(['./build']);
});


// Build project    - ?
gulp.task('build', function(callback) {
    runSequence(
        // 'build-clean',
        'concat-copy-to-build:styles',
        'copy-to-build:html',
        callback
    );
});


//  need change .gitignore   !!!
//  only node_modules?