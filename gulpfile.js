const gulp = require('gulp')
const postcss = require('gulp-postcss')
const imagemin = require('gulp-imagemin')
const webpack = require('gulp-webpack')
const browsersync = require('browser-sync')

const webpackThree = require('webpack')
const webpackConfig = require('./webpack.config.js')

let css = () => {
  return gulp.src('src/css/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('dist/css'))
}

let images = () => {
	return gulp.src('src/img/**/*')
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest('dist/img'))
}

let js = () => {
  return gulp.src('src/js/main.js')
    .pipe(webpack(webpackConfig, webpackThree))
    .pipe(gulp.dest('dist/js'))
}

let serve = () => {
  return browsersync({
    files: './**/*',
    server: {
      baseDir: './'
    }
  })
}

gulp.task('css', css)
gulp.task('img', images)
gulp.task('js', js)
gulp.task('browsersync', serve)

gulp.task('watch', ['browsersync'], ()=> {
  gulp.watch(['src/css/*.css', 'postcss.config.js'], css)
  gulp.watch(['src/img/**/*'], images)
  gulp.watch(['src/js/main.js'], js)
})

gulp.task('default', ['css', 'img', 'js'])
