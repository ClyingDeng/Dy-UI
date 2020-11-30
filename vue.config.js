const webpack = require('webpack');
module.exports = {
  transpileDependencies: ['vue-class-component'],
  configureWebpack: {
  },
  chainWebpack: config => {
    config
      .entry('index')
      .add('@babel/polyfill')
      .end();
    const scssRes = config.module.rule('scss').oneOfs.store;
    scssRes.forEach(item => {
      item
      .use("sass-resource-loader")
        .loader('sass-resources-loader')
        .options({
          resources: './src/styles/_var.scss'
        }).end();
    })
  },
  publicPath: '/',
  devServer: {
    // hot:true,
    host: 'localhost',
    port: 8888,
    open : true,
    // https: false
  }
}