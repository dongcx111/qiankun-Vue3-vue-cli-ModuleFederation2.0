<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App2" />
  <HelloWorldMain msg="Welcome to Your Vue.js App2" />
</template>

<script setup>
  // import HelloWorld from './components/HelloWorld.vue'
  import { defineAsyncComponent } from 'vue'
  const HelloWorld = defineAsyncComponent(() => import('app1/HelloWorld1'))
  const HelloWorldMain = defineAsyncComponent(() => import('mainApp/HelloWorld'))
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
