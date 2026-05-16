

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // Define your routes here
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

// router.beforeEach((to, from, next) => {
//     console.log('Navigating to:', from.path, to.path)

//     if (from.path !== to.path) {
//         next()
//     }

// })

export default router