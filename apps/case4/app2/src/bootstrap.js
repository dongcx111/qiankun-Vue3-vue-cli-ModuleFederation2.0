import { createApp } from 'vue'
import App from './App.vue'
import "./public-path";

// 如果没有使用构建插件，那么可以创建新的实例，并注册模块
// import { createInstance } from '@module-federation/enhanced/runtime';

let instance = null;


function render(props = {}) {
    const { container } = props;

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

