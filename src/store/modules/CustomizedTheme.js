const state = () => ({
    showSideBar: true,
    mainColor: '#161B22',
    sideBarColor: '#273E4B',
    sideBarTextColor: '#D6D6D6',
    appBarColor: '#1B2A32',
    textColor: '#a7b6bf',
});

const mutations = {
  setShowSideBar: (state, payload) => {
      state.showSideBar = payload
  }
};

export default {
    namespaced: true,
    state,
    mutations
}