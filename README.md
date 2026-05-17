# qiankun + Vue3 + vue-cli + Module Federation 2.0 踩坑记录

## category 1：主应用通过 「CDN + external」 共享外部依赖：「Vue + Vue Router 等」，子应用通过 「CDN + external」 复用主应用加载外部依赖的 http 缓存，不需配置 shared 共享依赖

### case 1: 子应用复用主应用暴露出的模块 :white_check_mark: 

### case 2: 子应用复用不属于 qiankun 微前端体系的其他远程项目暴露出的模块 :white_check_mark:


### case 3：子应用之间互相共享组件 :wrench:

>> 条件限制
>>1. qiankun 子应用 + Module Federation 无法同时共存，子应用作为两个身份需分开构建
>>2. 子应用作为 Module Federation 需要单独构建，然后将构建产物复制到 public 目录作为独立资源供远程调用


## category 2：主应用通过 shared 共享依赖

### case 4

### 问题1：当从 app1 切换到 app2 时共享依赖会失效，导致 app2 加载了自己的依赖

### 问题2：子应用配置 import:false 选项，减小子应用产物体积，完全复用主应用依赖，子应用切换时会导致已加载的共享依赖失效，app2 会报找不到 vue 的错误

>> Tips
>> 1. 这里需要明确的一点，对于基于 Module Federation 的微应用来说，基座是消费方，基座往往是先启动的，然后通过 remotes 加载子应用，子应用为提供方；
>> 2. 在 qiankun 微应用中基座收敛公共组件提供给子应用使用，属于提供方，子应用才是消费方；
>> 3. Module Federation 中 import:false 选项是给提供方使用的，也就是子应用，[前往官网查看说明](https://module-federation.io/zh/configure/shared.html#import)；
>> 4. 所以在 qiankun 中本不应该给子应用设置，但有趣的是 Module Federation 中消费者和生产者是可以共存的，qiankun 中的主从关系是明确的，从 Module Federation 角度来看这样用也是可以的 😂；





