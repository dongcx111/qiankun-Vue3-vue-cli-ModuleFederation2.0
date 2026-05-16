<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App2" /> -->
  <HelloWorldMain msg="Welcome to Your Vue.js App2" />
</template>

<script setup>
  // import HelloWorld from './components/HelloWorld.vue'
  import { defineAsyncComponent } from 'vue'

  // import { loadComponent } from './utils/index'

  // const loadComponent = (scope, module) => {
  //   return async () => {
  //     // 初始化共享作用域（shared scope）用提供的已知此构建和所有远程的模块填充它
  //     // eslint-disable-next-line
  //     await __webpack_init_sharing__('default');
  //     const container = window[scope]; // 或从其他地方获取容器
  //     // 初始化容器 它可能提供共享模块
  //     try {
  //       // eslint-disable-next-line
  //       await container.init(__webpack_share_scopes__.default);
  //     } catch (error) {
  //       console.log('remote container already initialized');

  //     }

  //     const factory = await window[scope].get(module);

  //     console.log("111111", factory)
  //     const Module = factory();
  //     return Module;
  //   };
  // }

  // const asyncComponent = loadComponent('mainApp', './HelloWorld')

  // import('mainApp/HelloWorld').then(res => {
  //   console.log("import", res);

  // })

  // const HelloWorld = defineAsyncComponent(() => import('app1/HelloWorld1'))
  const HelloWorldMain = defineAsyncComponent(() => import('mainApp/HelloWorld'))
  // const HelloWorldMain = defineAsyncComponent(() => asyncComponent())
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
