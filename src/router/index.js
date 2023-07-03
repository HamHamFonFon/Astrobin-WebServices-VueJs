import { createRouter, createWebHistory } from 'vue-router'

import PageToday from '@/components/pages/Today.vue'
import PageImage from '@/components/pages/Image.vue'

const routes = [
    {
        path: '/',
        name: 'PageToday',
        label: 'Image du jour',
        component: PageToday,
        icon: 'mdi-star'
    },
    {
        path: '/image',
        name: 'Image',
        label: 'Image',
        component: PageImage,
        icon: 'mdi-star'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router