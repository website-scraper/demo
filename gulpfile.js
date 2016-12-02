var gulp = require('gulp');
var concat = require('gulp-concat');
var template_cache = require('gulp-angular-templatecache');
var run_sequence = require('run-sequence');

var config = {
	styles: {
		src: [
			'./public/bower_components/bootstrap/dist/css/bootstrap.min.css',
			'./public/css/bootstrap-theme.min.css',
			'./public/css/style.css'
		],

		dist: 'app.css',
		dest: './public/dist'
	},

	fonts: {
		src: './public/bower_components/bootstrap/fonts/*',
		dest: './public/fonts'
	},

	templates: {
		src: './front/modules/**/*.html',
		dest: './front/.template-cache'
	},

	js: {
		src: [
			'./public/bower_components/jquery/dist/jquery.min.js',
			'./public/bower_components/bootstrap/dist/js/bootstrap.min.js',
			'./public/bower_components/angular/angular.min.js',
			'./public/bower_components/angular-route/angular-route.min.js',
			'./public/bower_components/angular-resource/angular-resource.min.js',

			'./front/app.js',
			'./front/routes.js',
			'./front/modules/**/*.js',
			'./front/services/*.js',
			'./front/resources/*.js',

			'./front/.template-cache/*.js'
		],

		dist: 'app.js',
		dest: './public/dist'
	}
};

gulp.task('styles', function() {
	return gulp.src(config.styles.src)
		.pipe(concat(config.styles.dist))
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task('fonts', function() {
	return gulp.src(config.fonts.src)
		.pipe(gulp.dest(config.fonts.dest))
});

gulp.task('templates', function() {
	return gulp.src(config.templates.src)
		.pipe(template_cache({ module: 'app.templates' }))
		.pipe(gulp.dest(config.templates.dest));
});

gulp.task('js', function() {
	return gulp.src(config.js.src)
		.pipe(concat(config.js.dist))
		.pipe(gulp.dest(config.js.dest));
});

gulp.task('build', function() {
	return run_sequence(['templates', 'styles', 'fonts'], ['js']);
});

gulp.task('watch', ['build'], function() {
	return gulp.watch(['./front/**/*.*'], ['build']);
});

gulp.task('default', ['watch']);
