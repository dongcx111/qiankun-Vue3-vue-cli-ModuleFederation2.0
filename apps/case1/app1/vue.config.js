const { defineConfig } = require('@vue/cli-service')
const { name } = require("./package");

const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const { remoteRuntime } = require("@qvm/utils");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    externals: {
      "vue": "Vue",
      "vue-router": "VueRouter",
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "app1",
        remotes: {
          //基于 Promise 的动态 Remote
          // mainApp: remoteRuntime("http://localhost:8080", "mainApp"),

          //URL 方式
          mainApp: "mainApp@http://localhost:8080/remoteEntry.js",
        },
      }),
    ],
  }
})
