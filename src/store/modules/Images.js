import { ImagesWs } from '@/repositories/webservices/images'

const state = () => ({
    images: []//,
    //loaded: false
})

const actions = {
    async fetchImages({ commit }, params, offset, limit) {
        const wsResponse = ImagesWs.GET_IMAGES_BY(params, offset, limit);
        wsResponse
            .then(r => {
                if (200 === r.status) {
                    let listImages = r.data.map(data => {
                        return {
                            id: data.id,
                            title: data.title,
                            subjects: data.subjects,
                            uploaded: data.uploaded,
                            urlGallery: data.urlGallery,
                            urlThumb: data.urlThumb,
                            urlRegular: data.urlRegular,
                            urlHd: data.urlHd,
                            user: data.user,
                            urlHistogram: data.urlHistogram,
                            urlSkyplot: data.urlSkyplot
                        }
                    })
                    commit('setImages', listImages);
                }
            })
            .catch(err => console.log(err.message));
    },

    async fetchImageById({ commit }, id) {
        /**
         * @todo how to use action in Message Store ?
         */
        commit('message/setShow', true, { root: true });
        commit('message/setType', 'warning', { root: true });
        commit('message/setMessage', 'Loading data...', { root: true })
        commit('message/setHttpCode', null, { root: true })

        try {
            const wsResponse = await ImagesWs.GET_IMAGE_BY_ID(id);
            commit("updateImage", wsResponse);
            commit('message/setShow', false, { root: true });
            commit('message/setType', 'success', { root: true });
            commit('message/setMessage', 'Data loaded', { root: true })
            commit('message/setHttpCode', 200, { root: true })
        } catch (error) {
            commit('message/setType', 'error', { root: true });
            commit('message/setMessage', error.message, { root: true })
            commit('message/setHttpCode', error.code, { root: true })
        }
    }
};

const mutations = {
    addImage: (state, image) => {
        state.images.push(image);
    },
    updateImage: (state, newImage) => {
        state.images = [newImage];
    },
    setImages: (state, images) => {
        state.images = images;
    }
};

const getters = {
    getImageById: (state) => (id) => {
        return state.images.find(image => id === image.astrobin_id);
    },
    getImages: (state) => state.images
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};