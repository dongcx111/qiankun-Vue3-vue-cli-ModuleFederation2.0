<script setup>
    import { defineAsyncComponent } from 'vue';

    const HelloWorld = defineAsyncComponent(() => import('module_federation/HelloWorld'))
</script>

<template>

    <div>
        <HelloWorld msg="Welcome to Your Vue.js Main App" />
    </div>
</template>

<style lang='scss' scoped></style>
