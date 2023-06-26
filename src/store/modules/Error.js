const state = () => ({
    error: ''
});

const actions = {
    postError({ commit }, errorMsg) {
        commit('setError', errorMsg);
    }
};

const mutations = {
    setError: (state, payload) => {
        state.error = payload;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};