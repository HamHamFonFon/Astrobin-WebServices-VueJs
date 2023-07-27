import { UserWs } from '@/repositories/webservices/user'
import { ImagesWs } from '@/repositories/webservices/images'
const initialState = () => {
    return {
        data: {},
        listImages: []
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
            if (wsResponse.username && 0 < wsResponse.image_count) {
                commit('resetListImages');
                const wsResponseImages = await ImagesWs.GET_IMAGES_BY({'user': wsResponse.username}, 0, wsResponse.image_count );
                wsResponseImages.listImages.forEach(img => commit('addUserImage', img));
            }
            commit('setUser', wsResponse);
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
        state.listImages = [];
    },
    addUserImage: (state, image) => {
        state.listImages.push(image);
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