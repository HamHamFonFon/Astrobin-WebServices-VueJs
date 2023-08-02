import { UserWs } from '@/repositories/webservices/user'
import { ImagesWs } from '@/repositories/webservices/images'
const initialState = () => {
    return {
        data: {},
        images: []
    }
}

const state = initialState();

const actions = {
    async getUserByName({ commit }, userName) {
        commit('message/setLoading', true, { root: true });
        commit('message/setType', 'warning', { root: true });
        commit('message/setMessage', 'Loading astrobin user "' + userName + '"', { root: true })
        commit('message/setHttpCode', null, { root: true })

        try {
            const wsResponse = await UserWs.GET_USER_BY_NAME(userName);
            commit('setUser', wsResponse);
            if (wsResponse.username && 0 < wsResponse.image_count) {
                commit('resetListImages');
                const wsResponseImages = ImagesWs.GET_IMAGES_BY({'user': wsResponse.username}, 0, 20 );
                wsResponseImages.then(r => {
                    r.listImages.forEach(img => commit('addUserImage', img))
                });
            }

            commit('message/setType', 'success', { root: true });
            commit('message/setMessage', 'User and images loaded', { root: true })
            commit('message/setHttpCode', 200, { root: true })
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
    resetListImages: (state) => {
        state.images = [];
    },
    addUserImage: (state, image) => {
        state.images.push(image);
    },
    setUser: (state, user) => {
        state.data = user;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}