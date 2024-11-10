import { createWebHistory, createRouter } from 'vue-router'
import MainTest from '@/page/MainTest.vue'
import ComunityPage from '@/page/ComunityPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainTest
    },
    {
        path: '/ComunityPage',
        name: 'ComunityPage',
        component: ComunityPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router