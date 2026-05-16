export const loadComponent = (scope, module) => {
    return async () => {
        // 初始化共享作用域（shared scope）用提供的已知此构建和所有远程的模块填充它
        // eslint-disable-next-line
        await __webpack_init_sharing__('default');
        const container = window[scope]; // 或从其他地方获取容器
        // 初始化容器 它可能提供共享模块
        try {
            // eslint-disable-next-line
            await container.init(__webpack_share_scopes__.default);
        } catch (error) {
            console.log('remote container already initialized');

        }

        const factory = await container.get(module);

        console.log("111111", factory)
        const Module = factory();
        return Module;
    };
}