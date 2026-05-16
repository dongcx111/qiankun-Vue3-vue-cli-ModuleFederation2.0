import { createApp } from 'vue'
import App from './App.vue'
import "./public-path";

let instance = null;


function render(props = {}) {
    const { container } = props;
    console.log('container', container)
    instance = createApp(App)
    instance.mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
    console.log("[vue] props from main framework", props);
    render(props);
}
export async function unmount() {
    instance.unmount();
    instance._container.innerHTML = ''
    instance = null;
}

if (window.__POWERED_BY_QIANKUN__) {
    window['app2'] = { bootstrap, mount, unmount }
}

// const loadApp = async () => {
//     const { bootstrap, mount, unmount, render } = await import('./bootstrap.js')
//     return { bootstrap, mount, unmount, render }
// }

// // 导出异步加载的生命周期函数
// export const bootstrap = async () => {
//     const { bootstrap: bootstrapFn } = await loadApp()
//     return bootstrapFn()
// }

// export const mount = async (props) => {
//     const { mount: mountFn } = await loadApp()
//     return mountFn(props)
// }

// export const unmount = async (props) => {
//     const { unmount: unmountFn } = await loadApp()
//     return unmountFn(props)
// }