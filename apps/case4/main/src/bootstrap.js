import { createApp } from 'vue'
// import App from './App.vue'
import App from './Root.vue'
import { registerMicroApps, start, prefetchApps } from "qiankun";

import router from './router'

const mainApp = createApp(App)
mainApp.use(router)
    .mount('#app')

registerMicroApps([
    {
        name: "app1", // app name registered
        entry: "//localhost:8081",
        container: "#container",
        activeRule: "/app1",
    },
    {
        name: "app2", // app name registered
        entry: "//localhost:8082",
        container: "#container",
        activeRule: "/app2",
    }
]);

prefetchApps([
    { name: 'app1', entry: '//localhost:8081' },
]);

start({
    sandbox: true,

    props: {
        name: "main-app"
    },
    prefetch: true
});
// eslint-disable-next-line
console.log("__FEDERATION__.__INSTANCES__fromMain", __FEDERATION__.__INSTANCES__);