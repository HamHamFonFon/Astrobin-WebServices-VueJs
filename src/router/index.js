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
        meta: {
            layout: 'home'
        }
    },
    {
        path: '/image-of-the-day',
        name: 'today',
        component: PageToday,
        meta: {
            layout: 'page'
        }
    },
    {
        path: '/toppicks',
        name: 'toppicks',
        component: null,
        meta: {
            layout: 'page'
        }
    },
    {
        path: '/images',
        name: 'images',
        component: ListImages,
        meta: {
            layout: 'page'
        }
    },
    {
        path: '/user/:username?',
        name: 'user',
        label: 'User',
        component: PageUser,
        icon: 'mdi-account',
        meta: {
            layout: 'page'
        }
    },
    {
        path: '/image/:astrobinId?',
        name: 'image',
        label: 'Astrobin image',
        component: PageImage,
        meta: {
            layout: 'page'
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router