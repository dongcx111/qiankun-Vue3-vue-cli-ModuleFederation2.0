const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const { ModuleFederationPlugin } = require("webpack").container;
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const path = require('path')

const { remoteRuntime } = require("@qvm/utils");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8080',
  devServer: {
    port: 8080
  },

  configureWebpack: {
    mode: "development",
    optimization: {
      // minimize: false
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
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^3.5.34',
            // import: false,
            shareKey: 'vue',
            shareScope: 'default',
          },
          vueRouter: {
            singleton: true,
          }
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
  // chainWebpack: config => {
  //   config.optimization.splitChunks({
  //     chunks: 'all',
  //     cacheGroups: {
  //       // qiankunChunk: {
  //       //   name: 'qiankun-chunk-vendors',
  //       //   test: /[\\/]node_modules[\\/]qiankun/,
  //       //   priority: 8,
  //       //   chunks: 'initial'
  //       // },
  //       // coreJsVendors: {
  //       //   name: 'core-js-chunk-vendors',
  //       //   test: /[\\/]node_modules[\\/]core-js/,
  //       //   priority: -10,
  //       //   chunks: 'initial'
  //       // },
  //       // elementPlusVendors: {
  //       //   name: 'element-plus-chunk-vendors',
  //       //   test: /[\\/]node_modules[\\/]@?element-plus/,
  //       //   priority: -10,
  //       //   chunks: 'initial'
  //       // },
  //       vueVendors: {
  //         name: 'vue-chunk-vendors',
  //         test: /[\\/]node_modules[\\/]@vue[\\/]/,
  //         priority: 9,
  //         chunks: 'all'
  //       },
  //       vueRouterVendors: {
  //         name: 'vue-router-chunk-vendors',
  //         test: /[\\/]node_modules[\\/]vue-router[\\/]/,
  //         priority: 8,
  //         chunks: 'all'
  //       },
  //       // lodashVendors: {
  //       //   name: 'lodash-chunk-vendors',
  //       //   test: /[\\/]node_modules[\\/]lodash/,
  //       //   priority: -10,
  //       //   chunks: 'initial'
  //       // },
  //       defaultVendor: {
  //         name: 'chunk-vendors',
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -11,
  //         chunks: 'all'
  //       },
  //       commonChunk: {
  //         name: 'chunk-common',
  //         minChunks: 2,
  //         priority: -20,
  //         chunks: 'all',
  //         reuseExistingChunk: true
  //       }
  //     }
  //   })
  // }
})
