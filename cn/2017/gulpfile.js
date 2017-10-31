/**
 * 1. js压缩放置在html的script标签 用inlinesource
 * 2. 图片压缩 imagemin
 */
'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var inlinesource = require('gulp-inline-source');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// gulp.task('inlinesource', function() {
// 	return gulp.src('pre_index.html')
// 		.pipe(inlinesource())
// 		.pipe(gulp.dest('./index.html'));
// });

gulp.task('imagemin', function() {
	return gulp
		.src('images/**/*')
		.pipe(
			imagemin({
				// 无损压缩jpg
				// progressive: true,
				use: [pngquant()]
			})
		)
		.pipe(gulp.dest('images/'));
});

// gulp.watch('src/**', ['inlinesource']);
