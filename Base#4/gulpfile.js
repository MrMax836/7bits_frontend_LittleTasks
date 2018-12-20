/*#################################
/   For use install:    npm install --save-dev run-sequence,
/                       npm install --save-dev del
/
/   For RUN:            gulp build
/##################################*/


// includes
var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var runSequence = require('run-sequence');


var path = {
    css: './src/styles/*.css',
    html: './src/templates/*.html',
    build: {
        root: './build',
        css: './build/styles',
        html: './build'
    }
};

// Concat and copy *.styles files to build directory
gulp.task('concat-copy-to-build:styles', function() {
    return gulp.src(path.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(path.build.css))
});

// Copy .html file to build directory
gulp.task('copy-to-build:html', function() {
    return gulp.src(path.html)
        .pipe(gulp.dest(path.build.html))
});

// Clean /build directory
gulp.task('clean', function() {
    return del([path.build.root]);
});

// Build project
gulp.task('default', function(callback) {
    runSequence('clean',
        ['copy-to-build:html', 'concat-copy-to-build:styles'],
        callback);
});

