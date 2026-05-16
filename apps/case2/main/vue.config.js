const { defineConfig } = require('@vue/cli-service')

const { ModuleFederationPlugin } = require("webpack").container;

const path = require('path')

const { remoteRuntime } = require("@qvm/utils");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080
  },
  configureWebpack: {
    externals: {
      "vue": "Vue",
      "vue-router": "VueRouter",
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "mainApp",
        filename: "remoteEntry.js",
        // library: {
        //   type: "window",
        //   name: "mainApp",
        // },
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue',
        },
        remotes: {
          //基于 Promise 的动态 Remote
          // module_federation: remoteRuntime("http://localhost:8082", "module_federation"),

          //URL 方式
          module_federation: "module_federation@http://localhost:8082/remoteEntry.js",
        },
      }),
    ]
  },
})
