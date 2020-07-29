const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const concat = require('gulp-concat');
const rimraf = require('rimraf');
const webpack = require('webpack-stream');

const path = {
  build: {
    img: 'build/img/'
  },
  src: {
    img: 'src/img/images/*.*'
  },
  watch: {
    js: 'src/js/**/*.js',
    style: 'src/css/**/*.css',
    scss: 'src/css/style.scss',
    img: 'src/img/**/*.*'
  },
  clean: './build'
};

gulp.task('clean', function(cb) {
  return rimraf(path.clean, cb);
});

gulp.task('image:build', function() {
  return gulp.src(path.src.img).pipe(imagemin({
    progressive: true,
    svgoPlugins: [
      {
        removeViewBox: false
      }
    ],
    use: [pngquant()],
    interlaced: true
  })).pipe(gulp.dest(path.build.img));
});

gulp.task('build', ['image:build', 'webpack']);

gulp.task('watch', function() {
  gulp.watch([path.watch.style], ['build']);
  gulp.watch([path.watch.scss], ['build']);
  gulp.watch([path.watch.js], ['build']);
  return gulp.watch([path.watch.img], ['build']);
});

gulp.task('default', ['build', 'watch']);

gulp.task('webpack', function() {
  return gulp.src('src/entry').pipe(webpack(require('./webpack.config'))).pipe(gulp.dest('build/'));
});
