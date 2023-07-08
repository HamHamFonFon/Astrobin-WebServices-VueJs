import { createRouter, createWebHistory } from 'vue-router'

import PageToday from '@/components/pages/Today.vue'
import ListImages from '@/components/pages/ListImages.vue'
import PageImage from '@/components/pages/Image.vue'

const routes = [
    {
        path: '/',
        name: 'Today',
        label: 'Image of the day',
        component: PageToday,
        icon: 'mdi-star',
        leftSide: true
    },
    {
        path: '/images',
        name: 'Images',
        label: 'Images',
        component: ListImages,
        icon: 'mdi-folder',
        leftSide: true
    },
    {
        path: '/user',
        name: 'User',
        label: 'User',
        // component: ListImages,
        icon: 'mdi-account',
        leftSide: true
    },
    {
        path: '/image/:astrobinId?',
        name: 'Image',
        label: 'Astrobin image',
        component: PageImage,
        leftSide: false
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router