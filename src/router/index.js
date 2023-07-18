import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/components/pages/Homepage.vue";
import PageToday from '@/components/pages/Today.vue'
import ListImages from '@/components/pages/ListImages.vue'
import PageImage from '@/components/pages/Image.vue'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        label: 'Homepage',
        component: HomePage,
        icon: 'mdi-home-city-outline',
        leftSide: true
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