import { TodayWs } from '@/repositories/webservices/todayimage'
import { ImagesWs } from '@/repositories/webservices/images'

const state = () => ({
    date: null,
    image: {},
    astrobinImageId: null,
    listTodayImages: []
});

const actions = {
    /**
     *
     * @param commit
     * @returns {Promise<void>}
     */
    async fetchImageOfTheDay({commit}) {
        commit('message/setLoading', true, { root: true });
        commit('message/setType', 'warning', { root: true });
        commit('message/setMessage', 'Loading data IOTD...', { root: true })
        commit('message/setHttpCode', null, { root: true })

        try {
            const wsResponse = await TodayWs.GET_TODAYS_IMAGE(0, 1);
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
    /**
     *
     * @param commit
     * @returns {Promise<void>}
     */
    async fetchListImagesOfTheDay({commit}) {
        try {
            commit('resetStateListImages');
            const wsResponse = await TodayWs.GET_TODAYS_IMAGE(1, 16);
            wsResponse.forEach(response => {
                const wsResponseImage = ImagesWs.GET_IMAGE_BY_ID(response.astrobinImageId);
                wsResponseImage.then(r => {
                    commit("addTodayImage", { image: r.urlRegular, date: response.date, title: r.title });
                })

            });
        } catch (error) {
            console.log(error);
        }
    }
};

const mutations = {
    resetStateListImages: (state) => {
        state.listTodayImages = [];
    },
    setDate: (state, date) => {
        state.date = date;
    },
    setAstrobinImageId: (state, astrobinImageId) => {
        state.astrobinImageId = astrobinImageId;
    },
    setImage: (state, image) => {
        state.image = image;
    },
    addTodayImage: (state, todayImage) => {
        state.listTodayImages.push(todayImage);
    },
};

const getters = {
    sortedTodayImages: (state) => {
        return [...state.listTodayImages].sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};