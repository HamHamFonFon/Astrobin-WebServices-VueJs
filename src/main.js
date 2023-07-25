import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router';
import store from '@/store';

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
})

// Masonry
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App);
app
    .use(router)
    .use(store)
    .use(vuetify)
    .use(MasonryWall)
    .mount('#app');