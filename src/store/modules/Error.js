const state = () => ({
    error: '',
    httpCode: 200
});

const actions = {
    postError({ commit }, errorMsg) {
        commit('setError', errorMsg);
        commit('setHttpCode', );
    }
};

const mutations = {
    setError: (state, payload) => {
        state.error = payload;
    },
    setHttpCode: (state, payload) => {
        state.httpCode = payload;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};