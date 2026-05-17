const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container;
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8082",
  devServer: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    optimization: {
      // splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "module_federation", // 模块名称
        filename: "remoteEntry.js",
        library: { type: 'window', name: 'module_federation' },
        exposes: {
          // 对外暴露的组件
          "./HelloWorld": "./src/components/HelloWorld.vue"
        },
      }),
    ]
  }
})
