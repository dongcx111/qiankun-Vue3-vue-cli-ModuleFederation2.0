import { createApp } from 'vue'


import App from './App.vue'
import "./public-path";
import router from './router'



let instance = null;
export function render1(props = {}) {
    // eslint-disable-next-line
    const { container } = props;
    // eslint-disable-next-line
    // console.log("__FEDERATION__.__INSTANCES__", __FEDERATION__.__INSTANCES__)

    // console.log(container)
    instance = createApp(App)
    // console.log(instance)
    instance.use(router)
    instance.mount(container ? container.querySelector("#app") : "#app");


}

// 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//     render();
// }

export async function bootstrap() {
    console.log("[vue] vue app bootstraped");
    // console.log(document.querySelector('#container'))
}
export async function mount(props) {
    console.log("[vue] props from main framework", props);

    render1(props);
}
export async function unmount() {
    console.log("[vue] vue app unmount");
    // console.log(instance)
    if (instance) {
        // eslint-disable-next-line
        console.log("__FEDERATION__.__INSTANCES__app1_unmount_pre", __FEDERATION__.__INSTANCES__);
        instance.unmount();
        instance = null;
    }

}
