import { createStore, createLogger } from 'vuex';
import images from '@/store/modules/Images'
import today from '@/store/modules/Today'
import user from '@/store/modules/User'
import message from "@/store/modules/Message";
import customizedTheme from "@/store/modules/CustomizedTheme";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        images,
        today,
        user,
        message,
        customizedTheme,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
