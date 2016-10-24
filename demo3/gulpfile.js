var gulp=require('gulp');
var sass=require('gulp-sass');
var prefix=require('gulp-autoprefixer');
gulp.task('sass',function(){
  gulp.src('styles/main.scss')
  .pipe(sass())
  .pipe(prefix())
  .pipe(gulp.dest('styles/'));
});
