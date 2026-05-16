<template>
  <div class="welcome">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App1" /> -->
    <HelloWorldMain msg="Welcome to Your Vue.js App1" />
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue';
  // import { loadComponent } from '../utils/index'

  // const HelloWorldMain = defineAsyncComponent(() => (loadComponent('mainApp', './HelloWorld')()))
  const HelloWorldMain = defineAsyncComponent(() => import('mainApp/HelloWorld'))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
