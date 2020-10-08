<template>
  <Preloader v-if="loading"/>
  <div v-else-if="product" class="product-item">
    <img :src="product.product_img" alt="Some img">
    <div class="desc">
      <h3>{{product.product_name}}</h3>
      <p>{{product.price}}₽</p>
      <button class="buy-btn" @click="addProduct(product)">Купить</button>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
import Preloader from '@/components/Preloader';

export default {
  name: 'Product',
  props: ['product'],
  methods: {
    ...mapActions(['addProduct']),
  },
  components: {
    Preloader,
  },
};
</script>