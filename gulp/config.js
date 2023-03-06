const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    scss: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    favicon: `${srcPath}/assets/favicon`,
    images: `${srcPath}/assets/images`,
    iconsMono: `${srcPath}/assets/icons/mono`,
    iconsMulti: `${srcPath}/assets/icons/multi`,
    pug: `${srcPath}/pug`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    images: `${destPath}/images`,
    icons: `${destPath}/static`,
    fonts: `${destPath}/static/fonts`,
    favicon: `${destPath}/static/favicon`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
