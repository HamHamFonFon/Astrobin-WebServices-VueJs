import {createRouter, createWebHistory} from 'vue-router';

import Today from '@/components/pages/Today.vue'
import Image from '@/components/pages/Image.vue'

const routes = [
    {
        path: '/',
        component: Today
    },
    {
        path: '/image',
        component: Image
    }
];

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router