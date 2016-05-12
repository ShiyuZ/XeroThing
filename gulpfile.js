var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

var paths = {
    css: 'src/**/*.scss',
    javascript: 'src/**/*.js',
    html: 'src/**/*.html',
	images: 'src/images/*'
};

gulp.task('javascript', () => {
    gulp.src(paths.javascript)
        .pipe(gulp.dest('dist'))
});

gulp.task('html', () =>
    gulp.src(paths.html)
        .pipe(gulp.dest('dist'))
);

gulp.task('sass', () =>
    gulp.src(paths.css)
        .pipe(sass())
        .pipe(gulp.dest('dist'))
);
gulp.task('images', () => {
	gulp.src(paths.images)
		.pipe(gulp.dest('dist/images'))
});

gulp.task('watch', () =>
{
    gulp.watch(paths.css, ['sass']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.javascript, ['javascript']);
	gulp.watch(paths.images, ['images']);
});

gulp.task('serve', () => connect.server({livereload: true, root: 'dist'}));

gulp.task('default', ['sass', 'html', 'javascript', 'images']);
