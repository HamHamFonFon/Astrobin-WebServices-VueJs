import { ImagesWs } from '@/repositories/webservices/images'

const initialState = () => {
    return {
        images: [],
        totalCount: 0,
        offset: 0
    }
};
const state = initialState;

const actions = {
    /**
     *
     * @param commit
     * @param params
     * @param formData
     * @param offset
     * @param limit
     * @returns {Promise<void>}
     */
    async fetchImages({ commit }, { formData, offset, limit}) {
        if (0 === offset) {
            commit('resetState');
        }
        commit('message/setLoading', true, { root: true });
        commit('message/setType', 'warning', { root: true });
        commit('message/setMessage', 'Loading astrobin images', { root: true })
        commit('message/setHttpCode', null, { root: true })
        try {
            let params = {};
            params[formData.type] = formData.term;
            const wsResponse = await ImagesWs.GET_IMAGES_BY(params, offset, limit);
            commit('message/setType', 'success', { root: true });
            commit('message/setMessage', 'Images loaded', { root: true })
            commit('message/setHttpCode', 200, { root: true })
            commit('setTotalCount', wsResponse.totalCount);
            commit('setOffset', wsResponse.offset);
            wsResponse.listImages.forEach(image => {
                commit('addImage', image);
            });

        } catch (error) {
            commit('message/setType', 'error', { root: true });
            commit('message/setMessage', error.message, { root: true })
            commit('message/setHttpCode', error.code, { root: true })
            commit('message/setLoading', true, { root: true });
        }

        commit('message/setLoading', false, { root: true });
    },

    /**
     *
     * @param commit
     * @param id
     * @returns {Promise<void>}
     */
    async fetchImageById({ commit }, id) {
        /**
         * @todo how to use action in Message Store ?
         */
        commit('message/setLoading', true, { root: true });
        commit('message/setType', 'warning', { root: true });
        commit('message/setMessage', 'Loading astrobin image "' + id + '"', { root: true })
        commit('message/setHttpCode', null, { root: true })

        try {
            const wsResponse = await ImagesWs.GET_IMAGE_BY_ID(id);
            commit('message/setType', 'success', { root: true });
            commit('message/setMessage', 'Image "' + wsResponse.title + '" loaded', { root: true })
            commit('message/setHttpCode', 200, { root: true })
            commit("updateImage", wsResponse);
            commit('setTotalCount', 1);
        } catch (error) {
            commit('message/setType', 'error', { root: true });
            commit('message/setMessage', error.message, { root: true })
            commit('message/setHttpCode', error.code, { root: true })
            commit('message/setLoading', true, { root: true });
        }

        commit('message/setLoading', false, { root: true });
    }
};

const mutations = {
    resetState: (state) => {
        const s = initialState();
        Object.keys(s).forEach(key => {
            state[key] = s[key];
        })
    },
    addImage: (state, image) => {
        state.images.push(image);
    },
    updateImage: (state, newImage) => {
        state.images = [newImage];
    },
    setTotalCount: (state, totalCount) => {
        state.totalCount = totalCount;
    },
    setOffset: (state, offset) => {
      state.offset = offset;
    }
};

const getters = {
    getImageById: (state) => (id) => {
        return state.images.find(image => id === image.astrobin_id);
    },
    getTotalCount: (state) => {
        return state.images.totalCount;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};