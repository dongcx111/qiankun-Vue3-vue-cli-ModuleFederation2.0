import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/WelcomePage.vue')
    }
]

const router = createRouter({
    history: createWebHistory('app1'),
    routes
})

export default router