const webpack = require('webpack');
module.exports = {
  transpileDependencies: ['vue-class-component'],
  configureWebpack: {
    performance: {
      hints: 'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件最大体积
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
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
    hot: true,
    open: true,
    port: 8888,
    https: false
  }
}