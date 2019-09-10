// const path = require('path');

module.exports = {
  // chainWebpack: config => {
  //   config.resolve.alias.set('@components', path.join(__dirname, 'src/components'));
  // },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    noInfo: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    modules: true
  }
};
