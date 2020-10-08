import axios from 'axios';

export default {
  state: {
    cartItems: [],
  },
  getters: {
    cartItems: ({ cartItems }) => cartItems,
  },
  mutations: {
    SET_CART_ITEMS(state, data) {
      state.cartItems = { ...data };
    },
  },
  actions: {
    addProduct({ commit }, product) {
      const localCartItems = state.cartItems;
      const find = localCartItems.find((el) => el.id_product === product.id_product);
      if (find) {
        axios.put(`/api/cart/${find.id_product}`, { quantity: 1 });
        // this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
        find.quantity += 1;
      } else {
        const prod = { quantity: 1, ...product };
        axios.post('/api/cart', prod)
        // this.$parent.postJson('/api/cart', prod)
          .then((data) => {
            if (data.result === 1) {
              localCartItems.push(prod);
            }
          });
      }
      commit('SET_CART_ITEMS', localCartItems);
    },
    remove({ commit }, item) {
      const localCartItems = state.cartItems;
      if (item.quantity > 1) {
        axios.put(`/api/cart/${item.id_product}`, { quantity: -1 })
        // this.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
          .then((data) => {
            if (data.result === 1) {
              item.quantity -= 1;
            }
          });
      } else {
        axios.delete(`/api/cart/${item.id_product}`)
        // this.$parent.deleteJson(`/api/cart/${item.id_product}`)
          .then((data) => {
            if (data.result === 1) {
              localCartItems.splice(this.cartItems.indexOf(item), 1);
            }
          });
      }
      commit('SET_CART_ITEMS', localCartItems);
    },
  },
};
