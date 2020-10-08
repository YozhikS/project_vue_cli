import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/Goods.vue'),
  },
  {
    path: '/goods/:id',
    name: 'Good',
    component: () => import('../views/Good.vue'),
  },
  {
    path: '/CartProduct',
    name: 'CartProduct',
    component: () => import('../views/CartProduct.vue'),
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
