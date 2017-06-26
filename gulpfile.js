const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
// const concat = require('gulp-concat')
// const babel = require('gulp-babel')
// const watch = require('gulp-watch')
const browserSync = require('browser-sync')
const reload = browserSync.reload
const shell = require('gulp-shell')

gulp.task('default', ['styles', 'webpack', 'browser-sync'], () => {
  gulp.watch('./assets/sass/**/*', ['styles'])
  gulp.watch('./assets/js/**/*', ['webpack'])
  gulp.watch(['./public/**/*', './public/*', '!public/js/**/.#*js', '!public/css/**/.#*css']).on('change', reload)
})

gulp.task('styles', () => {
  gulp.src('assets/sass/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
})

gulp.task('browser-sync', ['styles'], function () {
  // THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
  // browserSync.init({
  //   proxy: {
  //     target: 'localhost:3000', // can be [virtual host, sub-directory, localhost with port]
  //     ws: true // enables websockets
  //   },
  //   serveStatic: ['.', './public']
  // })

  browserSync.init({
        server: './public'
    });
})

gulp.task('webpack', () => {
  return gulp.src('*.js', {read: false})
  .pipe(shell([
    'webpack'
  ]))
  .pipe(browserSync.stream())
})

// gulp.task('webpack', shell.task([
//   'webpack'
// ]))

// gulp.task('server', shell.task([
//   'yarn run server'
// ]))
