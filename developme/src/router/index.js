import { createWebHistory, createRouter } from 'vue-router'
import MainTest from '@/page/MainTest.vue'
import CommunityPage from '@/page/CommunityPage.vue'
import LoginPage from '@/page/LoginPage.vue'
import MyPage from '@/page/MyPage.vue'
import NewTest from '@/page/NewTest.vue'

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
    },
    {
        path: '/MyPage',
        name: 'MyPage',
        component: MyPage
    },
    {
        path: '/NewTest',
        name: 'NewTest',
        component: NewTest
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router