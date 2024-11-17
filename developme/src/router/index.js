import { createWebHistory, createRouter } from 'vue-router'
import MainTest from '@/page/MainTest.vue'
import TestPage from '@/page/TestPage.vue'
import TodoPage from '@/page/TodoPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainTest
    },
    {
        path: '/TestPage',
        name: 'TestPage',
        component: TestPage
    },
    {
        path: '/TodoPage',
        name: 'TodoPage',
        component: TodoPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router