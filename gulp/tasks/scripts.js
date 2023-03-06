import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
// import degug from 'gulp-debug';
import browserSync from 'browser-sync';
import merge from 'merge-stream';
import { globSync } from 'glob';
import rename from 'gulp-rename';
import config from '../config';

export const scriptsBuild = () => {
  const files = globSync(`${config.src.js}/**/!(_)*.js`);

  return merge(
    files.map((file) =>
      browserify({
        entries: file,
        debug: true,
      })
        .transform('babelify', { presets: ['@babel/preset-env'] })
        .bundle()
        .on('error', function browserifyError(error) {
          console.log(error.stack);
          this.emit('end');
        })
        .pipe(source(file))
        // some hardcode
        .pipe(rename(`${file.split('\\')[2].split('.')[0]}.min.js`))
        .pipe(buffer())
        .pipe(gulpif(config.isDev, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpif(config.isProd, uglify()))
        .pipe(gulpif(config.isDev, sourcemaps.write()))
        // some hardcode
        .pipe(gulp.dest(`${config.dest.js}`))
        .pipe(browserSync.reload({ stream: true }))
    )
  );
};

export const scriptsWatch = () =>
  gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild);
