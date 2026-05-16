

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // Define your routes here
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/WelcomeHome.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     console.log('Navigating to:', from.path, to.path)

//     if (from.path !== to.path) {
//         next()
//     }

// })

export default router