import gulp from 'gulp';
import config from './gulp/config';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles';
import { faviconBuild, faviconWatch } from './gulp/tasks/favicon';
import { fontsBuild, fontsWatch } from './gulp/tasks/fonts';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';

config.setEnv();

export const build = gulp.series(
  clean,
  gulp.parallel(
    pugBuild,
    stylesBuild,
    scriptsBuild,
    fontsBuild,
    imagesBuild,
    spritesBuild,
    faviconBuild
  )
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    pugWatch,
    stylesWatch,
    scriptsWatch,
    faviconWatch,
    fontsWatch,
    imagesWatch,
    spritesWatch
  )
);
