const { defineConfig } = require('@vue/cli-service')
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const path = require('path')

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
        library: {
          type: "window",
          name: "mainApp",
        },
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue',
        }
      }),
    ]
  },
})
