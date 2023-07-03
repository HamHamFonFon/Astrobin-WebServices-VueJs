import { createRouter, createWebHistory } from 'vue-router'

import PageToday from '@/components/pages/Today.vue'
import PageImage from '@/components/pages/Image.vue'

const routes = [
    {
        path: '/',
        name: 'PageToday',
        component: PageToday
    },
    {
        path: '/image',
        name: 'Image',
        component: PageImage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router