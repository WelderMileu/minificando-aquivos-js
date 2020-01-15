const gulp     = require('gulp');
const uglify   = require('gulp-uglify');
const concat   = require('gulp-concat');
//const pipeline = require('readable-stream').pipeline();
const maps     = require('gulp-sourcemaps');

// Função não esta funcionando corretamente.
exports.default = async () => {
	await gulp.src('src/js/*.js')
			  .pipe(concat('build.js'))
			  .pipe(maps.init())
			  .pipe(uglify())
			  .pipe(maps.write('.'))
			  .pipe(gulp.dest('build'))
};

