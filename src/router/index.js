import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/views/Homepage.vue";
import PageToday from '@/views/Today.vue'
import ListImages from '@/views/ListImages.vue'
import PageImage from '@/views/Image.vue'
import PageUser from '@/views/User.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: HomePage,
    },
    {
        path: '/image-of-the-day',
        name: 'today',
        component: PageToday,
    },
    {
        path: '/toppicks',
        name: 'toppicks',
        component: null
    },
    {
        path: '/images',
        name: 'images',
        component: ListImages,
    },
    {
        path: '/user/:username?',
        name: 'user',
        label: 'User',
        component: PageUser,
        icon: 'mdi-account',
    },
    {
        path: '/image/:astrobinId?',
        name: 'image',
        label: 'Astrobin image',
        component: PageImage,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router