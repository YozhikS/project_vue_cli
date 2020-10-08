import Vue from 'vue';
import Vuex from 'vuex';
import goods from '@/store/goods';
import good from '@/store/good';
import products from '@/store/products';
import cart from '@/store/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    goods,
    good,
    products,
    cart,
  },
});
