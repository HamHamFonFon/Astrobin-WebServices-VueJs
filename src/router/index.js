import { createRouter, createWebHistory } from 'vue-router'

import PageToday from '@/components/pages/Today.vue'
import PageImage from '@/components/pages/Image.vue'

const routes = [
    {
        path: '/',
        name: 'Today',
        label: 'Image of the day',
        component: PageToday,
        icon: 'mdi-star'
    },
    {
        path: '/image/:astrobinId?',
        name: 'Image',
        label: 'Astrobin image',
        component: PageImage,
        icon: 'mdi-star'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router