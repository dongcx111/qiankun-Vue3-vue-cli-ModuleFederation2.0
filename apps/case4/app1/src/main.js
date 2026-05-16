// import { createApp } from 'vue'
// import App from './App.vue'
// import "./public-path";

// let instance = null;
// function render(props = {}) {
//     const { container } = props;

//     instance = createApp(App)
//     instance.mount(container ? container.querySelector("#app") : "#app");
// }

// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//     render();
// }

// export async function bootstrap() {
//     console.log("[vue] vue app bootstraped");
// }
// export async function mount(props) {
//     console.log("[vue] props from main framework", props);

//     render(props);
// }
// export async function unmount() {
//     instance.unmount();
//     instance = null;
// }
// import { loadComponent } from './utils'
// import "./public-path";

// 创建异步加载函数
const loadApp = async () => {

    const { bootstrap, mount, unmount, render1 } = await import('./bootstrap')
    return { bootstrap, mount, unmount, render1 }
}


// 导出异步加载的生命周期函数
export const bootstrap = async () => {

    // await loadComponent("mainApp", './HelloWorld')()

    // console.log("import('./bootstrap')执行前", document.querySelector('#container'))
    // const { bootstrap: bootstrapFn } = await loadApp()
    const { bootstrap } = await import('./bootstrap')
    // console.log("import('./bootstrap')执行后", document.querySelector('#container'))
    return bootstrap()
}

export const mount = async (props) => {
    const { mount: mountFn } = await loadApp()
    return mountFn(props)
}

export const unmount = async (props) => {
    const { unmount: unmountFn } = await loadApp()
    return unmountFn(props)
}
// console.log("window.__POWERED_BY_QIANKUN__", window.__POWERED_BY_QIANKUN__)
// 非 qiankun 环境下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
    // console.log("window.__POWERED_BY_QIANKUN__", window.__POWERED_BY_QIANKUN__)
    loadApp().then(({ render1 }) => {
        render1()
    })
}