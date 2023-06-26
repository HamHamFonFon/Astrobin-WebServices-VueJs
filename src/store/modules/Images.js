import { ImagesWs } from '@/repositories/webservices/images/index'

const state = () => ({
    images: []
})

const actions = {
    fetchImages({ commit }, params, offset, limit) {
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
            .catch(err => {});
    },
    async fetchImageById({ commit }, id) {
        try {
            const wsResponse = await ImagesWs.GET_IMAGE_BY_ID(id);
            commit("addImage", wsResponse);
        } catch (error) {
            commit('error/setError', error.message, { root: true })
        }
    },
    async updateImageByNewId({ commit}, newId ) {
        try {
            const wsResponse = await ImagesWs.GET_IMAGE_BY_ID(newId);
            commit("updateImage", wsResponse);
        } catch (error) {
            commit('error/setError', error.message, { root: true })
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
        return state.images.find(image => id === image.id);
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