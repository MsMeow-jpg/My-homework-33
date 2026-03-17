const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// SCSS compilation, autoprefixing, minification
function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

// Local server with auto-reload
function serve() {
  browserSync.init({
    server: './src'
  });

  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/javascript/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.serve = serve;
exports.default = gulp.series(styles, serve);