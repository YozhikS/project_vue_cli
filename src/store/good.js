export default {
  state: {
    goodData: null,
    loading: false,
  },
  getters: {
    goodData: ({ goodData }) => goodData,
    loading: ({ loading }) => loading,
  },
  mutations: {
    SET_GOOD_DATA(state, data) {
      state.goodData = { ...data };
    },
    SET_LOADING_STATUS(state, status) {
      state.loading = status;
    },
  },
  actions: {
    fetchGoodData({ commit }, id) {
      commit('SET_LOADING_STATUS', true);
      console.log(id);
      setTimeout(() => {
        commit('SET_GOOD_DATA', { title: 'Мышь', price: 2000 });
        commit('SET_LOADING_STATUS', false);
      }, 2000);
    },
  },
};
