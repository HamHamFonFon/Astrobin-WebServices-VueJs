import { createStore, createLogger } from 'vuex';
import images from '@/store/modules/Images'
import error from "@/store/modules/Error";
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        images,
        error
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
