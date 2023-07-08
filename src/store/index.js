import { createStore, createLogger } from 'vuex';
import images from '@/store/modules/Images'
import message from "@/store/modules/Message";
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        images,
        message
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
