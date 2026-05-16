

## 主应用通过 「CDN + external」 共享外部依赖：「Vue + Vue Router 等」，子应用通过 「CDN + external」 复用主应用加载外部依赖的 http 缓存，不需配置 shared 共享依赖

### case 1: 子应用复用主应用暴露出的模块

### case 2: 子应用复用不属于 qiankun 微前端体系的其他远程项目暴露出的模块


### case 3：子应用之间互相共享组件
1. qiankun 子应用 + Module Federation 无法同时共存，子应用作为两个身份需分开构建
2. 子应用作为 Module Federation 需要单独构建，然后将构建产物复制到 public 目录作为独立资源供远程调用


## 主应用通过 shared 共享依赖

### case 4

### 问题1：当从 app1 切换到 app2 时共享依赖会失效，导致 app2 加载了自己的依赖

### 问题2：子应用配置 import:false 选项，不打包依赖，完全复用主应用依赖，子应用切换时会导致已加载的共享依赖失效，app2 会报找不到 vue 的错误

### 结论：目前还未找到具体原因，有可能是 qiankun 子应用卸载时恢复 global 状态，使其能回到应用加载之前的状态导致的

## qiankun + vite 

### case 5：vite-plugin-qiankun 方案：子应用通过插件内置函数，手动注入 qiankun 生命周期钩子，插件内部通过创建内联 script 标签注入到 html 模板中

### case 6：icestark 方案：vite 打包库模式，然后通过自定义 html 插件手动注入脚本

### 结论：适配集成不太好，与其做适配不如直接换微前端框架


