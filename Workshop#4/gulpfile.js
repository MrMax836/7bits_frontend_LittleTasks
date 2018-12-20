var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync').create();

var path = {
    css: './src/**/*.css',
    html: './src/templates/*.html',
    build: {
        root: './build',
        css: './build/styles',
        html: './build'
    }
};

// Concat and copy *.styles files to build directory
gulp.task('css', function() {
    return gulp.src(path.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(path.build.css))
});

// Copy .html file to build directory
gulp.task('html', function() {
    return gulp.src(path.html)
        .pipe(gulp.dest(path.build.html))
});

// Clean /build directory
gulp.task('clean', function() {
    return del([path.build.root]);
});

gulp.task('images', function() {
    // TODO
});

// Build project        Whether to add 'build-clean'
gulp.task('default', ['html', 'css']);

gulp.task('watch', function() {
    gulp.watch(path.html, ['html']);
    gulp.watch(path.css, ['css']);
    gulp.watch(path.images, ['images']);
});

gulp.task('hotReload', function() {
    browserSync.init({
        server: {
            baseDir: path.build.html
        }
    })
});