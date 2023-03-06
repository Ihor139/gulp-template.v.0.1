import browserSync from 'browser-sync';
import gulp from 'gulp';
// import degug from 'gulp-debug';
import svgSprite from 'gulp-svg-sprite';
import config from '../config';

const spriteMono = () =>
  gulp
    .src(`${config.src.iconsMono}/**/*.svg`)
    // .pipe(degug({ title: 'sprite' }))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprites/sprite-mono.svg',
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  //     {
                  //       removeAttrs: {
                  //         attrs: ['class', 'data-name', 'fill.*', 'stroke.*'],
                  //       },
                  //     },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(config.dest.icons))
    .pipe(browserSync.reload({ stream: true }));

const spriteMulti = () =>
  gulp
    .src(`${config.src.iconsMulti}/**/*.svg`)
    // .pipe(degug({ title: 'sprite' }))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprites/sprite-multi.svg',
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  //     {
                  //       removeAttrs: {
                  //         attrs: ['class', 'data-name'],
                  //       },
                  //     },
                  //     {
                  //       removeUselessStrokeAndFill: false,
                  //     },
                  //     {
                  //       inlineStyles: true,
                  //     },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(config.dest.icons))
    .pipe(browserSync.reload({ stream: true }));

export const spritesBuild = gulp.parallel(spriteMono, spriteMulti);

export const spritesWatch = () => {
  gulp.watch(`${config.src.iconsMono}/**/*.svg`, spriteMono);
  gulp.watch(`${config.src.iconsMulti}/**/*.svg`, spriteMulti);
};
