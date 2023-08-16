const state = () => ({
    showSideBar: false,
    miniSidebar: false,
    mainColor: '#161B22',
    sideBarColor: '#273E4B',

    sideBarTextColor: '#D6D6D6',
    appBarColor: '#1B2A32',
    textColorGrey: '#e9e9e9',
    textColorPaleGreen: '#a7b6bf',
});

const mutations = {
  setShowSideBar: (state, payload) => {
      state.showSideBar = payload
  },
  setMiniSideBar(state, payload) {
    state.miniSidebar = payload;
  },
};

export default {
    namespaced: true,
    state,
    mutations
}