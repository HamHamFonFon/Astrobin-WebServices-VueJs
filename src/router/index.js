import { createRouter, createWebHistory } from 'vue-router'

import PageImage from '@/views/Image.vue'
import PageUser from '@/views/User.vue'
import backgroundImg1 from '@/assets/images/bg-1.jpg'
import backgroundImg2 from '@/assets/images/bg-2.jpg'
import backgroundImg3 from '@/assets/images/bg-3.jpg'
import backgroundImg4 from '@/assets/images/bg-5.jpg'

const routes = [
    {
        path: '/',
        redirect: '/home',
        meta: {}
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Homepage.vue'), //HomePage,
        meta: {
            layout: 'home',
            key: "menu.home",
            text: "Home",
            icon: "mdi-view-dashboard-outline",
        }
    },
    {
        path: '/images',
        name: 'images',
        component: () => import('@/views/ListImages.vue'), //ListImages,
        meta: {
            layout: 'page',
            key: "menu.images",
            icon: "mdi-image-multiple",
            text: "Images",
            description: 'Search, filter and sort images from Astrobin website',
            image: backgroundImg3,
        }
    },
    {
        path: '/image-of-the-day',
        name: 'today',
        component: () => import('@/views/Today.vue'), // PageToday,
        meta: {
            layout: 'page',
            key: "menu.today",
            icon: "mdi-trophy",
            text: "Image of the day",
            description: 'Display selected image of the day and last ten images of the day',
            image: backgroundImg1,
        }
    },
    {
        path: '/toppicks',
        name: 'toppicks',
        component: null,
        meta: {
            layout: 'page',
            key: "menu.toppicks",
            icon: "mdi-star",
            text: "Top-picks",
            description: '',
            image: backgroundImg2,
            disabled: true
        }
    },
    {
        path: '/user/:username?',
        name: 'user',
        component: PageUser,
        meta: {
            layout: 'page',
            key: "menu.user",
            icon: "mdi-account",
            text: "User",
            description: 'Display images of specific user',
            image: backgroundImg4,
            defaultParamKey: 'username',
            defaultParamValue: 'siovene'
        }
    },
    {
        path: '/image/:astrobinId?',
        name: 'image',
        component: PageImage,
        meta: {
            layout: 'page',
            text: 'Image',
            description: null
        }
    },
    {
        path: '/:notFound',
        component: () => import('@/views/NotFound.vue'),
        meta: {
            layout: 'default'
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router