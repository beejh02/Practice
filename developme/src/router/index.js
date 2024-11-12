import { createWebHistory, createRouter } from 'vue-router'
import MainTest from '@/page/MainTest.vue'
import CommunityPage from '@/page/CommunityPage.vue'
import LoginPage from '@/page/LoginPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainTest
    },
    {
        path: '/CommunityPage',
        name: 'ComumnityPage',
        component: CommunityPage
    },
    {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router