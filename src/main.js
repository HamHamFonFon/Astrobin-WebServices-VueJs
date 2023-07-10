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

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')
