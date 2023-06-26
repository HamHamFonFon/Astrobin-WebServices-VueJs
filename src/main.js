import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router';
import store from '@/store';

import 'bootstrap/dist/css/bootstrap.css'; // Import the Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.js'; // Import the Bootstrap JS
import { BootstrapVue } from "bootstrap-vue";

createApp(App)
    .use(router)
    .use(store)
    .use(BootstrapVue)
    .mount('#app')
