import axios from 'axios';

export default {
  state: {
    products: [],
    filtered: [],
  },
  getters: {
    products: ({ products }) => products,
    filtered: ({ filtered }) => filtered,
  },
  mutations: {
    SET_FILTERED_DATA(state, data) {
      state.filtered = { ...data };
    },
    SET_PRODUCTS_DATA(state, data) {
      state.products = { ...data };
      state.filtered = { ...data };
    },
  },
  actions: {
    filter({ commit }, userSearch) {
      const regexp = new RegExp(userSearch, 'i');
      commit('SET_FILTERED_DATA', state.products.filter((el) => regexp.test(el.product_name)));
    },
    getProducts({ commit }, url) {
      return axios.get(url)
        .then((resault) => {
          commit('SET_PRODUCTS_DATA', resault.data);
          return resault.data;
        })
        .catch((error) =>
          // this.$refs.error.setError(error);
          error);
    },
  },
};
