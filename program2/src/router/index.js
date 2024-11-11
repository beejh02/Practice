import { createWebHistory, createRouter } from 'vue-router'
import alarm from '@/page/alarm.vue'
import dayExer from '@/page/dayExer.vue'

const routes = [
    {
        path: '/',
        name: 'alarm',
        component: alarm
    },
    {
        path: '/dayExer',
        name: 'dayExer',
        component: dayExer
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router