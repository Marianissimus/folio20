const path = require('path');

module.exports = {
  chainWebpack(config) {
    config
      .entry('app')
      .clear()
      .add('./src/main.js')
      .end();
    config.resolve.alias
      .set('~', path.join(__dirname, './src'))
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          indentedSyntax: false,
        },
        prependData: '@import "~@/styles.scss";'
      },
    },
  },
  assetsDir: '@/assets/',
}