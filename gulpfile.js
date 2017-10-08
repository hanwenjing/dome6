/**
 * Created by Administrator on 2017/10/8 0008.
 */
var gulp=require("gulp");
var concat=require('gulp-concat');
var minifyCss=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var htmlmin=require('gulp-htmlmin');
gulp.task('minifycss',function(){
    gulp.src(['css/*.css'])
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('css/'))
})
gulp.task('uglifyjs',function(){
    gulp.src(['js/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
})
gulp.task('html',function(){
    gulp.src(['html/*.html'])
        .pipe(concat('main.html'))
        .pipe(htmlmin())
        .pipe(gulp.dest('html/'))
})