import { TodayWs } from '@/repositories/webservices/todayimage'
import { ImagesWs } from '@/repositories/webservices/images'

const state = () => ({
    date: null,
    image: {},
    astrobinImageId: null
});

const actions = {
    async fetchImageOfTheDay({commit}) {
        commit('message/setLoading', true, { root: true });
        commit('message/setType', 'warning', { root: true });
        commit('message/setMessage', 'Loading data IOTD...', { root: true })
        commit('message/setHttpCode', null, { root: true })

        try {
            const wsResponse = await TodayWs.GET_TODAY_IMAGE();
            const wsResponseImage = await ImagesWs.GET_IMAGE_BY_ID(wsResponse.astrobinImageId);

            commit("setDate", wsResponse.date);
            commit("setImage", wsResponseImage);
            commit("setAstrobinImageId", wsResponse.astrobinImageId);

            commit('message/setType', 'success', { root: true });
            commit('message/setMessage', 'Data loaded', { root: true })
            commit('message/setHttpCode', 200, { root: true })
        } catch (error) {
            commit('message/setType', 'error', { root: true });
            commit('message/setMessage', error.message, { root: true })
            commit('message/setHttpCode', error.code, { root: true })
        }
        commit('message/setLoading', false, { root: true });
    },

    // async fetchListImagesOfTheDay({commit}, limit, offset) {
    //
    // }
};

const mutations = {
    setDate: (state, date) => {
        state.date = date;
    },
    setAstrobinImageId: (state, astrobinImageId) => {
        state.astrobinImageId = astrobinImageId;
    },
    setImage: (state, image) => {
        state.image = image;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};