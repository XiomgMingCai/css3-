/**
 * Created by xiongMingCai on 2018/1/11.
 */
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
    return gulp.src('./**/*')
        .pipe(ghPages());
});