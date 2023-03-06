import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
// import imageminWebp from 'imagemin-webp';
import webp from 'gulp-webp';
import gulpif from 'gulp-if';
// import degug from 'gulp-debug';
// import rename from 'gulp-rename';
import config from '../config';

const copyImages = () =>
  gulp
    .src(
      `${config.src.images}/**/*`
      // { since: gulp.lastRun(copyImages) }
    )
    // .pipe(degug({ title: 'images' }))
    .pipe(changed(config.dest.images))
    .pipe(
      gulpif(
        config.isProd,
        imagemin([
          imagemin.mozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.8, 0.9] }),
          imagemin.svgo(),
        ])
      )
    )
    .pipe(gulp.dest(config.dest.images));

const convertImagesToWebp = () =>
  gulp
    .src(`${config.dest.images}/**/*.{jpg,png}`)
    // .pipe(changed(config.dest.images, { extension: '.webp' }))
    .pipe(webp({ quality: 100 }))
    // .pipe(imagemin([
    // imageminWebp({ quality: 80 }),
    // ]))
    // .pipe(rename({
    //   extname: '.webp',
    // }))
    .pipe(gulp.dest(config.dest.images));

export const imagesBuild = gulp.series(copyImages, convertImagesToWebp);

export const imagesWatch = () =>
  gulp.watch(`${config.src.images}/**/*`, imagesBuild);
