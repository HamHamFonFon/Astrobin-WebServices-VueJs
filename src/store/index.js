import { createStore, createLogger } from 'vuex';
import images from '@/stores/modules/Images'
import error from "@/stores/modules/Error";
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        images,
        error
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
