import { ImagesWs } from '@/repositories/webservices/images'

const state = () => ({
    images: [],
    totalCount: 0,
})

const actions = {
    /**
     *
     * @param commit
     * @param params
     * @param offset
     * @param limit
     * @returns {Promise<void>}
     */
    async fetchImages({ commit }, { formData, offset, limit}) {

        commit('message/setLoading', true, { root: true });
        commit('message/setType', 'warning', { root: true });
        commit('message/setMessage', 'Loading astrobin images', { root: true })
        commit('message/setHttpCode', null, { root: true })
        try {
            const wsResponse = await ImagesWs.GET_IMAGES_BY(formData, offset, limit);
            commit('message/setType', 'success', { root: true });
            commit('message/setMessage', 'Images loaded', { root: true })
            commit('message/setHttpCode', 200, { root: true })
            commit('setTotalCount', wsResponse.totalCount);
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
    addImage: (state, image) => {
        state.images.push(image);
    },
    updateImage: (state, newImage) => {
        state.images = [newImage];
    },
    setTotalCount: (state, totalCount) => {
        state.totalCount = totalCount;
    }
};

const getters = {
    getImageById: (state) => (id) => {
        return state.images.find(image => id === image.astrobin_id);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};