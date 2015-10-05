var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('copyhtml', function(){
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});
gulp.task('copyimg', function(){
    gulp.src('asset/*')
        .pipe(gulp.dest('dist/asset'));
    gulp.src('*.json')
        .pipe(gulp.dest('dist'));
    gulp.src('*.js')
        .pipe(gulp.dest('dist/js'));
    gulp.src('css/*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('index.js')
        .pipe(gulp.dest('dist'));
    gulp.src('node_modules/*')
        .pipe(gulp.dest('dist/node_modules'));
    gulp.src('libs/*')
        .pipe(gulp.dest('dist/libs'));
    gulp.src('js/**/').pipe(gulp.dest('dist/js'));
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build',['copyhtml','copyimg'] , function(){
    gulp.src('js/*.js')
        .pipe(gulp.dest('dist/js'));
});