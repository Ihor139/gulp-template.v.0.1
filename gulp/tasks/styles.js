import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import smartGrid from 'smart-grid';
import importFresh from 'import-fresh';
import sassGlob from 'gulp-sass-glob';
// import degug from 'gulp-degug';
import browserSync from 'browser-sync';
import config from '../config';

const SMART_GRID_CONFIG_NAME = 'smart-grid-config.js';

const sass = gulpSass(nodeSass);

const sassBuild = () =>
  gulp
    .src(`${config.src.scss}/**/!(_)*.scss`, { sourcemaps: config.isDev })
    // .pipe(degug({ title: 'scss' }))
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['./node_modules'],
      })
    )
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(config.dest.css, { sourcemaps: config.isDev }))
    .pipe(browserSync.reload({ stream: true }));

const smartGridBuild = (callback) => {
  const smartGridConfig = importFresh(`../../${SMART_GRID_CONFIG_NAME}`);
  smartGrid(`${config.src.scss}/generated`, smartGridConfig);

  callback();
};

export const stylesBuild = gulp.series(smartGridBuild, sassBuild);

export const stylesWatch = () => {
  gulp.watch(`${config.src.scss}/**/*.scss`, sassBuild);
  gulp.watch(`./${SMART_GRID_CONFIG_NAME}`, smartGridBuild);
};
