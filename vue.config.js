const { defineConfig } = require('@vue/cli-service')
// element-plus 按需加载
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  //服务项配置
  devServer: {
    host: "localhost",
    port: 8000,
    https: false,
    open: true, // 设置代理proxy
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true, //表示是否跨域，
      },
  
    },
  },

  // element-plus按需导入
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },

});
