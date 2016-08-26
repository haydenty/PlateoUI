var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./src/"
        }
    });
});

gulp.task( 'serve', ['browser-sync'],function() {
    gulp.watch('./src/*').on('change', bs.reload);
});
