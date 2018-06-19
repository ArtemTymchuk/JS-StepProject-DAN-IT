'use strict';


// use 'gulp' to run dev mode
// use 'gulp --build' to run build mode

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv,
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    beep = require('beepbeep'),
    jshint = require('gulp-jshint');


let onError = (err) => {
    notify.onError({
        title: "Error in " + err.plugin,
        message: err.message
    })(err);
    beep(1);
};


gulp.task('sass', function () {
    return gulp.src("./src/sass/**/*.scss")
        .pipe(plumber({errorHandler: onError}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.min.css'))
        .pipe(gulpif(argv.build, cleanCSS()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./dist/css/"));
});

gulp.task('js', function () {
    return gulp.src("./src/js/**/*.js")
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {beep: true}))
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(gulpif(argv.build, minify()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./dist/js/"))
});

gulp.task('img', function () {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/img/"))
});

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(gulpif(argv.build, clean()))

});


gulp.task('reload', function () {

    browserSync.init({
        server: "./"
    });
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/img/*');
    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('./src/**/*').on('change', browserSync.reload);
});

gulp.task('dev', function (callback) {
    runSequence('clean',
        ['sass', 'js', 'img'],
        'reload',
        callback);
});


gulp.task('default', ['dev']);