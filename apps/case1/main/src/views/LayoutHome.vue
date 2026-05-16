<script setup>
    import { ElContainer, ElHeader, ElAside, ElMain, ElMenu, ElMenuItem } from 'element-plus'
    import { useRoute } from 'vue-router'

    const route = useRoute()

    console.log('Current route:', route.path)




</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu class="el-menu-vertical-demo" router style="width: 100%;height: 100%;">
                        <el-menu-item index="/app1">
                            <i class="el-icon-setting"></i>
                            <span>app1</span>
                        </el-menu-item>
                        <el-menu-item index="/app2">
                            <i class="el-icon-setting"></i>
                            <span>app2</span>
                        </el-menu-item>
                        <el-menu-item index="/app3">
                            <i class="el-icon-setting"></i>
                            <span>app3</span>
                        </el-menu-item>
                        <el-menu-item index="/app4">
                            <i class="el-icon-setting"></i>
                            <span>app4</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                    <div id="container"></div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang='scss' scoped>
    .common-layout {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        .el-container {
            height: 100%;
        }


        .el-header,
        .el-footer,
        .el-main,
        .el-aside {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .el-header,
        .el-footer {
            background-color: var(--el-color-primary-light-7);
            color: var(--el-text-color-primary);
            text-align: center;
        }

        .el-aside {
            background-color: var(--el-color-primary-light-8);
            color: var(--el-text-color-primary);
            text-align: center;
        }

        .el-main {
            background-color: var(--el-color-primary-light-9);
            color: var(--el-text-color-primary);
            text-align: center;
        }
    }
</style>
