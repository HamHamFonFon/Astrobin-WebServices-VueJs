import { createStore, createLogger } from 'vuex';
import images from '@/store/modules/Images'
import today from '@/store/modules/Today'
import message from "@/store/modules/Message";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        images,
        today,
        message
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
