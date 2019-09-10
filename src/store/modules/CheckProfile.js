export default {
  namespaced: true,
  state: {
    isAuthenticated: false
  },
  mutations: {
    setAuthenticated(state, status) {
      state.isAuthenticated = status;
    }
  },
  actions: {}
};
