# qiankun + Vue3 + vue-cli + Module Federation 2.0

基于 qiankun 微前端框架和 Module Federation 2.0 的 Vue3 项目实践，探索多种依赖共享和组件复用方案。

## 技术栈

- **微前端框架**: qiankun
- **前端框架**: Vue 3
- **构建工具**: Vue CLI / Webpack
- **模块联邦**: @module-federation/enhanced (Module Federation 2.0)
- **包管理器**: pnpm
- **UI 组件**: Element Plus

## 项目结构

```
.
├── apps/
│   ├── case1/       # 子应用复用主应用暴露的模块
│   ├── case2/       # 子应用复用非 qiankun 体系的远程项目模块
│   ├── case3/       # 子应用之间互相共享组件
│   └── case4/       # 主应用通过 shared 共享依赖
└── README.md
```

## 案例说明

### Category 1：CDN + External 共享依赖

主应用通过 CDN + external 方式加载外部依赖（Vue、Vue Router 等），子应用通过同样的方式复用主应用的 HTTP 缓存，无需配置 shared 共享依赖。

#### Case 1：子应用复用主应用暴露的模块 ✅

- **说明**: 子应用通过 Module Federation 加载主应用暴露的组件
- **加载方式**: 
  - 基于 Promise 的动态 Remote
  - URL 方式
- **端口**:
  - 主应用: 8080
  - app1: 8081
  - app2: 8082

#### Case 2：子应用复用远程应用暴露的模块 ✅

- **说明**: 子应用复用不属于 qiankun 微前端体系的其他远程项目暴露的模块
- **新增**: mf 应用作为独立的远程模块提供方
- **端口**:
  - 主应用: 8080
  - app1: 8081
  - mf: 8083

#### Case 3：子应用之间互相共享组件 🔧

- **说明**: 探索子应用之间互相共享组件的方案
- **条件限制**:
  1. qiankun 子应用 + Module Federation 无法同时共存，子应用作为两个身份需分开构建
  2. 子应用作为 Module Federation 需要单独构建，然后将构建产物复制到 public 目录作为独立资源供远程调用

### Category 2：Shared 配置共享依赖

主应用通过 Module Federation 的 shared 配置共享依赖给子应用。

#### Case 4

- **问题 1**: 当从 app1 切换到 app2 时共享依赖会失效，导致 app2 加载了自己的依赖
- **问题 2**: 子应用配置 import:false 选项，减小子应用产物体积，完全复用主应用依赖，子应用切换时会导致已加载的共享依赖失效，app2 会报找不到 vue 的错误

**重要提示**:

1. 对于基于 Module Federation 的微应用来说，基座是消费方，基座往往是先启动的，然后通过 remotes 加载子应用，子应用为提供方；
2. 在 qiankun 微应用中基座收敛公共组件提供给子应用使用，属于提供方，子应用才是消费方；
3. Module Federation 中 import:false 选项是给提供方使用的，也就是子应用，[查看官网说明](https://module-federation.io/zh/configure/shared.html#import)；
4. 所以在 qiankun 中本不应该给子应用设置，但有趣的是 Module Federation 中消费者和生产者是可以共存的，qiankun 中的主从关系是明确的，从 Module Federation 角度来看这样用也是可以的 😂；
5. Module Federation 1.0 与 qiankun 的集成中，设置 import:false 后，子应用通过[基于 Promise 的动态 Remote](https://www.webpackjs.com/concepts/module-federation/#promisebaseddynamicremotes)可以实现依赖共享，查看[Demo](https://github.com/dongcx111/qiankun-ModuleFederation)。

## 快速开始

### 环境要求

- Node.js >= 14
- pnpm >= 7

### 安装依赖

```bash
cd apps/caseX/main
pnpm install

cd ../app1
pnpm install

# 其他应用同理
```

### 运行项目

以 case1 为例：

```bash
# 启动主应用
cd apps/case1/main
pnpm run dev

# 启动 app1（新终端）
cd apps/case1/app1
pnpm run dev

# 启动 app2（新终端）
cd apps/case1/app2
pnpm run dev
```

## 核心配置示例

### 主应用配置 (vue.config.js)

```javascript
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = defineConfig({
  configureWebpack: {
    externals: {
      "vue": "Vue",
      "vue-router": "VueRouter",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "mainApp",
        filename: "remoteEntry.js",
        library: { type: "window", name: "mainApp" },
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue',
        }
      }),
    ]
  }
})
```

### 子应用配置 (vue.config.js)

```javascript
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const { remoteRuntime } = require("@qvm/utils");

module.exports = defineConfig({
  devServer: {
    port: 8081,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  configureWebpack: {
    externals: {
      "vue": "Vue",
      "vue-router": "VueRouter",
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app1",
        remotes: {
          // 基于 Promise 的动态 Remote
          // mainApp: remoteRuntime("http://localhost:8080", "mainApp"),
          
          // URL 方式
          mainApp: "mainApp@http://localhost:8080/remoteEntry.js",
        },
      }),
    ],
  }
})
```

## 相关链接

- [qiankun 官方文档](https://qiankun.umijs.org/zh)
- [Module Federation 官方文档](https://module-federation.io/zh)
- [Vue 3 官方文档](https://vuejs.org/)
