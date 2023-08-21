import 'vuetify/dist/vuetify.css';
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from "vuetify/labs/components";

const AstroOtterLightThemes = {
    dark: false,
    colors: {
        // background: "#111b27",
        // surface: "#1E293B",
        primary: '#273E4B',
        secondary: '#2F4652',

        appBarColor: '#1B2A32',
        greytext: '#D6D6D6'
    }
};

export default createVuetify({
    components: {
        ...components,
        ...labs,
    },
    directives,
    theme: {
        themes: {
            light: AstroOtterLightThemes
        }
    }
});
