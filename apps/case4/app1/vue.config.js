const { defineConfig } = require('@vue/cli-service')
const { name } = require("./package");

const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const { remoteRuntime } = require("@qvm/utils");

const { envName } = require('./scripts/constants');

module.exports = new Promise((resolve) => {

  const commonConfig = {
    transpileDependencies: true,
    publicPath: "http://localhost:8081",
    // publicPath: "auto",
    configureWebpack: {
      // externals: {
      //   "vue": "Vue",
      //   "vue-router": "VueRouter",
      // }
    }
  }

  const commonMFOptions = {
    name: "app1", // 模块名称
    filename: "remoteEntry.js",
  }

  const remoteConfig = {
    publicPath: commonConfig.publicPath,
    css: {
      extract: {
        filename: 'remote/css/[name].[contenthash].css',
        chunkFilename: 'remote/css/[name].[contenthash].css'
      },
    },
    configureWebpack: {
      ...commonConfig.configureWebpack,
      devtool: false,
      output: {
        filename: 'remote/js/[name].[contenthash].js',
        chunkFilename: 'remote/js/[name].[contenthash].js',
      },
      optimization: {
        splitChunks: false,
      },
      plugins: [
        new ModuleFederationPlugin({
          ...commonMFOptions,
          library: {
            type: "window",
            name: "app1",
          },
          exposes: {
            // 对外暴露的组件
            "./HelloWorld1": "./src/components/HelloWorld.vue",
          },

          //构建从入口开始，如果使用了远程模块，需要在这里加上
          remotes: {
            //基于 Promise 的动态 Remote
            // app2: remoteRuntime("http://localhost:8082", "app2"),

            //URL 方式
            app2: "app2@http://localhost:8082/remoteEntry.js",

            //基于 Promise 的动态 Remote
            // mainApp: remoteRuntime("http://localhost:8080", "mainApp"),

            //URL 方式
            mainApp: "mainApp@http://localhost:8080/remoteEntry.js",
          },
        }),
      ]
    }
  }

  const normalConfig = {
    publicPath: commonConfig.publicPath,
    devServer: {
      port: 8081,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    },
    configureWebpack: {
      ...commonConfig.configureWebpack,
      optimization: {
        // minimize: false
      },
      output: {
        library: `${name}-[name]`,
        libraryTarget: "umd",
        chunkLoadingGlobal: `webpackJsonp_${name}`,
      },
      devtool: false,
      plugins: [
        new ModuleFederationPlugin({
          ...commonMFOptions,
          remotes: {

            //URL 方式
            mainApp: "mainApp@http://localhost:8080/remoteEntry.js",
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
              requiredVersion: '^5.0.6',
              // import: false,
              shareKey: 'vue-router',
              shareScope: 'default',
            }
          }
        }),
        // new BundleAnalyzerPlugin(),
      ],
    },
    // chainWebpack: config => {
    //   config.optimization.splitChunks({
    //     chunks: 'all',
    //     cacheGroups: {
    //       // qiankunChunk: {
    //       //   name: 'qiankun-chunk-vendors',
    //       //   test: /[\\/]node_modules[\\/]qiankun/,
    //       //   priority: -10,
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
    //         chunks: 'initial'
    //       },
    //       // vueRouterVendors: {
    //       //   name: 'vue-router-chunk-vendors',
    //       //   test: /[\\/]node_modules[\\/]vue-router[\\/]/,
    //       //   priority: -10,
    //       //   chunks: 'initial'
    //       // },
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
  }


  const resultConfig = process.env[envName] === "remote" ? remoteConfig : normalConfig

  // console.log(resultConfig, "result config");


  resolve({ default: defineConfig(resultConfig) })
})
