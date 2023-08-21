import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router';
import store from '@/store';

// Vuetify
import vuetify from '@/plugins/vuetify'

// Masonry
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App);
app
    .use(router)
    .use(store)
    .use(vuetify)
    .use(MasonryWall)
    .mount('#app');