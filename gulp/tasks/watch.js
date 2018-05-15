var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
		//gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssinject');
	});

});

gulp.task('cssinject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});