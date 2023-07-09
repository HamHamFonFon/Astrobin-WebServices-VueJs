const state = () => ({
    message: null,
    type: 'warning',
    httpCode: 0,
    show: true
});

const actions = {
    postError({ commit }, errorMsg) {
        commit('setError', errorMsg);
    }
};

const getters = {
    getShow: (state) => state.show
};

const mutations = {
    setShow: (state, payload) => {
        state.show = payload;
    },
    setType: (state, payload) => {
      state.type = payload;
    },
    setMessage: (state, payload) => {
        state.message = payload;
    },
    setHttpCode: (state, payload) => {
        state.httpCode = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};