{
  mode: 'development',
  context: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main',
  output: {
    hashFunction: 'xxhash64',
    path: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\dist',
    filename: 'js/[name].js',
    publicPath: 'http://localhost:8080/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
      '@components': 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\src\\components'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\node_modules',
      'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\@vue+cli-service@5.0.9_@rsp_c914bc3005b91687069cd044f5c3c9be\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\@vue+cli-plugin-babel@5.0.9_ea974269e6e081b8423ee1b1c65a6b09\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\node_modules',
      'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\@vue+cli-service@5.0.9_@rsp_c914bc3005b91687069cd044f5c3c9be\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-loader@17.4.2_@vue+comp_a12efed9f07df6f7539c068c8e476df9\\node_modules\\vue-loader\\dist\\index.js',
            options: {
              cacheDirectory: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '126d9f3e',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\sass-loader@16.0.8_@rspack+_3674ef599ff3078e5ddfe5610ecaf8ab\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\css-loader@6.11.0_@rspack+c_199ea98ad577c0f563421b3d152cd8fd\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcs_39055d6c35567fda5bfec21bcfe212d4\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\babel-loader@8.4.1_@babel+core@7.29.0_webpack@5.88.2\\node_modules\\babel-loader\\lib\\index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '21de5bfc'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        qiankunChunk: {
          name: 'qiankun-chunk-vendors',
          test: /[\\/]node_modules[\\/]qiankun/,
          priority: 8,
          chunks: 'initial'
        },
        vueVendors: {
          name: 'vue-chunk-vendors',
          test: /[\\/]node_modules[\\/]@vue[\\/]/,
          priority: 9,
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
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          extractComments: false
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new Plugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"http://localhost:8080/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'main-app',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        template: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\public\\index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      {
        patterns: [
          {
            from: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\public',
            to: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\dist',
            toType: 'dir',
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                'C:/Users/ledon/Desktop/qiankun+Vue3+vue-cli+ModuleFederation/apps/case4/main/public/index.html'
              ]
            },
            info: {
              minimized: true
            }
          }
        ]
      }
    ),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin(
      {
        extensions: [
          '.js',
          '.jsx',
          '.vue'
        ],
        cwd: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main',
        cache: true,
        cacheLocation: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main\\node_modules\\.cache\\eslint\\31c5fd24.json',
        context: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\apps\\case4\\main',
        failOnWarning: false,
        failOnError: true,
        eslintPath: 'C:\\Users\\ledon\\Desktop\\qiankun+Vue3+vue-cli+ModuleFederation\\node_modules\\.pnpm\\eslint@7.32.0\\node_modules\\eslint',
        formatter: 'stylish'
      }
    ),
    {
      opts: {
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        compressionAlgorithm: 'gzip',
        reportFilename: null,
        reportTitle: function () { /* omitted long function */ },
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: undefined,
        excludeAssets: null,
        logLevel: 'info',
        startAnalyzer: true,
        analyzerUrl: function () { /* omitted long function */ },
        analyzerPort: 8888
      },
      compiler: null,
      server: null,
      logger: {
        activeLevels: new Set([
          'info',
          'warn',
          'error',
          'silent'
        ])
      }
    },
    {
      _options: {
        name: 'mainApp',
        filename: 'remoteEntry.js',
        library: {
          type: 'window',
          name: 'mainApp'
        },
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue'
        },
        shared: {
          vue: {
            singleton: true,
            eager: true,
            'import': 'vue',
            requiredVersion: '^3.5.34',
            shareKey: 'vue',
            shareScope: 'default'
          }
        }
      },
      pluginName: 'ModuleFederationPlugin',
      coreModulePath: '../lib/container/ModuleFederationPlugin',
      name: 'ModuleFederationPlugin'
    },
    {
      apply: function () { /* omitted long function */ }
    },
    {
      apply: function () { /* omitted long function */ }
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
