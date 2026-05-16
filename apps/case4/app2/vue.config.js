const { defineConfig } = require('@vue/cli-service')
const { name } = require("./package");

const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const { envName } = require('./scripts/constants');

const { remoteRuntime } = require("@qvm/utils");

module.exports = new Promise((resolve) => {

  const commonConfig = {
    transpileDependencies: true,
    publicPath: "http://localhost:8082",
    // publicPath: "auto",
    configureWebpack: {
      // externals: {
      //   "vue": "Vue",
      //   "vue-router": "VueRouter",
      // }
    }
  }

  const commonMFOptions = {
    name: "app2", // 模块名称
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
            name: "app2",
          },
          exposes: {
            // 对外暴露的组件
            "./HelloWorld2": "./src/components/HelloWorld.vue",
          },

          //构建从入口开始，如果使用了远程模块，需要在这里加上
          remotes: {
            //基于 Promise 的动态 Remote
            // app1: remoteRuntime("http://localhost:8081", "app1"),

            //URL 方式
            // app1: "app1@http://localhost:8081/remoteEntry.js",

            //基于 Promise 的动态 Remote
            // mainApp: remoteRuntime("http://localhost:8080", "mainApp"),

            //URL 方式
            mainApp: "mainApp@http://localhost:8080/remoteEntry.js",
          },
          shared: {
            vue: {
              singleton: true,
              eager: false,
              import: false,
              requiredVersion: '^3.5.34',
              shareKey: 'vue',
              shareScope: 'default',
            }
          }
        }),
      ]
    }
  }

  const normalConfig = {
    publicPath: commonConfig.publicPath,
    devServer: {
      port: 8082,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    },
    configureWebpack: {
      ...commonConfig.configureWebpack,
      output: {
        library: `${name}-[name]`,
        libraryTarget: "umd",
        chunkLoadingGlobal: `webpackJsonp_${name}`,
      },
      optimization: {
        // minimize: false
      },
      plugins: [
        new ModuleFederationPlugin({
          ...commonMFOptions,
          remotes: {
            //基于 Promise 的动态 Remote
            // app1: remoteRuntime("http://localhost:8081", "app1"),

            //URL 方式
            // app1: "app1@http://localhost:8081/remoteEntry.js",

            //基于 Promise 的动态 Remote
            // mainApp: remoteRuntime("http://localhost:8080", "mainApp"),

            //URL 方式
            mainApp: "mainApp@http://localhost:8080/remoteEntry.js",
          },
          shareStrategy: 'loaded-first',
          shared: {
            vue: {
              singleton: true,
              import: false,
              requiredVersion: '^3.5.34',
              shareKey: 'vue',
              shareScope: 'default',
            }
          }
          // shared: ['vue']
        }),
      ]
    }
  }


  const resultConfig = process.env[envName] === "remote" ? remoteConfig : normalConfig

  // console.log(resultConfig, "result config");


  resolve({ default: defineConfig(resultConfig) })
})