<template>
  <Preloader v-if="loading"/>
  <div v-else-if="product" class = "tovar_cart" :name="name">
    <div class = "add_to_cart" >
      <a><img src = "../assets/imgs/tovar_hover.png" alt = ""></a> 
      <button  style="cursor:pointer" class="button_add_to_cart" @click="addProduct(product)"> Add to Cart</button> 
      <button v-if="!name" style="cursor:pointer" class="button_arrows"></button>
      <button v-if="!name" style="cursor:pointer" class="button_like"></button>
    </div> 
    <img :src="product.productImg" alt = "">
    <div class = "tovar_info" > {{product.productName}}</div> 
    <div class = "tovar_price siteColor">${{product.productPrice}}</div> 
    <div class = "stars"><img src = "../assets/imgs/stars.png" alt = ""></div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
import Preloader from '@/components/Preloader';

export default {
  name: 'Product',
  props: {
    product: Object,
    name:String,
  },
  // props: ['product'],
  data(){
    return {loading: false};
  },
  methods: {
    ...mapActions(['addProduct']),
  },
  components: {
    Preloader,
  },
};
</script>