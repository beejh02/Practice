import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '@/page/LoginPage.vue'
import MainTest from '@/page/MainTest.vue'
import SignupPage from '@/page/SignupPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainTest
    },
    {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/SignupPage',
        name: 'SignupPage',
        component: SignupPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router