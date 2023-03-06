import browserSync from 'browser-sync';
import gulp from 'gulp';
// import degug from 'gulp-debug';
import ttf2woff2 from 'gulp-ttf2woff2';
import config from '../config';

const fonts = () =>
  gulp
    .src(`${config.src.fonts}/**/*`)
    // .pipe(degug({ title: 'fonts' }))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(config.dest.fonts))
    .pipe(browserSync.reload({ stream: true }));

export const fontsBuild = gulp.parallel(fonts);

export const fontsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fonts);
};
