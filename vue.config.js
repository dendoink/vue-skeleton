const process = require('process');

const apiUrl = 'http://xxx.xxx.xx/';

module.exports = {
  publicPath: process.env.NODE_ENV === 'development'
    ? ''
    : '/xxx/', //正式环境下如果部署在子路径下需要配置
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: apiUrl, // 源地址
        changeOrigin: true // 改变源
      },
      '/login': {
        target: apiUrl, // 源地址
        changeOrigin: true // 改变源
      }
    }
    // host: 'front-local.verystar.cn'
  },
  configureWebpack: {},
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};