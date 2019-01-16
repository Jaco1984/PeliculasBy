const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('sass', () =>
    gulp.src('./src/assets/scss/*.scss')

    .pipe(sass({
        outputStyle: 'nested',
        sourceComments: true
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(connect.reload())
);



gulp.task('watch', () => {
    gulp.watch('./src/assets/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));

// gulp.task('automatico', () => {
//     gulp.watch('./src/assets/scss/*.scss', gulp.series('sass'));
// });