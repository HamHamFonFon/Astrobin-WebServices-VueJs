import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/views/Homepage.vue";
import PageToday from '@/views/Today.vue'
import ListImages from '@/views/ListImages.vue'
import PageImage from '@/views/Image.vue'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        label: 'Home',
        component: HomePage,
        icon: 'mdi-home-city-outline',
        leftSide: false
    },
    {
        path: '/image-of-the-day',
        name: 'today',
        label: 'Image of the day',
        component: PageToday,
        icon: 'mdi-trophy',
        leftSide: true
    },
    {
        path: '/toppicks',
        name: 'toppicks',
        label: 'Top-picks',
        icon: 'mdi-star',
        leftSide: true
    },
    {
        path: '/images',
        name: 'images',
        label: 'Images',
        component: ListImages,
        icon: 'mdi-image-multiple',
        leftSide: true
    },
    {
        path: '/user',
        name: 'user',
        label: 'User',
        // component: ListImages,
        icon: 'mdi-account',
        leftSide: true
    },
    {
        path: '/image/:astrobinId?',
        name: 'image',
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