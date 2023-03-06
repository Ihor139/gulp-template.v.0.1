import browserSync from 'browser-sync';
import gulp from 'gulp';
// import degug from 'gulp-debug';
import favicons from 'gulp-favicons';
import config from '../config';

const favicon = () =>
  gulp
    .src(`${config.src.favicon}/**/*`)
    // .pipe(degug({ title: 'favicon' }))
    .pipe(
      favicons({
        path: './',
        appName: '',
        appShortName: '',
        appDescription: '',
        icons: {
          appleIcon: true,
          favicons: true,
          online: false,
          appleStartup: false,
          android: true,
          firefox: false,
          yandex: true,
          windows: true,
          coast: false,
        },
      })
    )
    .pipe(gulp.dest(config.dest.favicon))
    .pipe(browserSync.reload({ stream: true }));

export const faviconBuild = gulp.parallel(favicon);

export const faviconWatch = () => {
  gulp.watch(`${config.src.favicon}/**/*`, favicon);
};
