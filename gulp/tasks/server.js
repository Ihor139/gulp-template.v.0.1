import browserSync from 'browser-sync';
import config from '../config';

const server = (callback) => {
  browserSync.create().init({
    server: {
      baseDir: config.dest.root,
    },
    files: [
      `${config.dest.pages}/**/*.html`,
      `${config.dest.pages}/**/*.css`,
      `${config.dest.pages}/**/*.js`,
      `${config.dest.html}/*.html`,
      `${config.dest.css}/*.css`,
      `${config.dest.js}/*.js`,
      {
        match: `${config.dest.images}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
    online: true,
    port: 8000,
  });

  callback();
};

export default server;
