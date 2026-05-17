const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const path = require('path')

const { remoteRuntime } = require("@qvm/utils");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8070
  },

  configureWebpack: {
    mode: "production",
    externals: {
      "vue": "Vue",
      "vue-router": "VueRouter",
      // "element-plus": "ElementPlus",
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
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  chainWebpack: config => {
    config.module.rule('images').parser({
      dataUrlCondition: {
        maxSize: 2 * 1024,
      },
    }).end()
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        coreJsVendors: {
          name: 'core-js-chunk-vendors',
          test: /[\\/]node_modules[\\/]core-js/,
          priority: -10,
          chunks: 'initial'
        },
        elementPlusVendors: {
          name: 'element-plus-chunk-vendors',
          test: /[\\/]node_modules[\\/]@?element-plus/,
          priority: -10,
          chunks: 'initial'
        },
        defaultVendor: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -11,
          chunks: 'all'
        },
        commonChunk: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    })
  }
})
