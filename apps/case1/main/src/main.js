import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import { registerMicroApps, start, prefetchApps } from "qiankun";

import router from './router'

const mainApp = createApp(App)
mainApp.use(router)
    .mount('#app')

registerMicroApps([
    // {
    //     name: "app1", // app name registered
    //     entry: "//localhost:8081",
    //     container: "#container",
    //     activeRule: "/app1",
    // },
    // {
    //     name: "app2", // app name registered
    //     entry: "//localhost:8082",
    //     container: "#container",
    //     activeRule: "/app2",
    // },
    {
        name: "app3", // app name registered
        entry: "//localhost:8083",
        container: "#container",
        activeRule: "/app3",
    },
    // {
    //     name: "app4", // app name registered
    //     entry: "//localhost:8084",
    //     container: "#container",
    //     activeRule: "/app4",
    // }
]);

prefetchApps([
    { name: 'app3', entry: '//localhost:8083' },
]);

start({
    sandbox: true,

    props: {
        name: "main-app"
    },
    prefetch: true
});
