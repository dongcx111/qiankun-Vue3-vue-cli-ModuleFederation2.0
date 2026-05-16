<template>
  <!-- <router-view></router-view> -->
  <LayoutHome></LayoutHome>
</template>

<script>
  import LayoutHome from './views/LayoutHome.vue';

  export default {
    name: 'App',
    components: {
      LayoutHome
    },
    mounted() {
      function getLoadTime() {

        const entriesResource = performance.getEntriesByType("resource");

        let fetchStart
        entriesResource.some((entry) => {
          fetchStart = entry.fetchStart;
          // console.log(entry);
          return true
          // 使用

        });

        function perfObserver(list, observer) {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "navigation") {
              let loadEventEnd = entry.loadEventEnd
              console.log(entry.loadEventEnd);
              const loadTime = loadEventEnd - fetchStart
              console.log("loadEventEnd", loadEventEnd);
              console.log("fetchStart", fetchStart);

              console.log('整页Load加载时间：', loadTime, 'ms');
              observer.disconnect();
            }
          });
        }
        const observer = new PerformanceObserver(perfObserver);
        observer.observe({ entryTypes: ["navigation"], buffered: true });
      }
      getLoadTime()
    }
  }
</script>

<style></style>
