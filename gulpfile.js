/**
 * Created by xiongMingCai on 2018/1/11.
 */
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
//https://xiomgmingcai.github.io/css3-/
gulp.task('deploy', function() {
    return gulp.src('./**/*')
        .pipe(ghPages());
});