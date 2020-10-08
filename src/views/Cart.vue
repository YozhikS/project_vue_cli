<template>
  <div>
    <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
    <div class="cart-block" v-show="showCart">
      <p v-if="!cartItems.length">Корзина пуста</p>
      <CartItem class="cart-item" 
        v-for="item of cartItems" 
        :key="item.id_product"
        :cart-item="item" 
        :img="imgCart"
        @remove="remove">
      </CartItem>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';
import CartItem from '@/views/CartItem';

export default {
  name: 'Cart',
  components: { CartItem },
  data(){
    return {
      imgCart: 'https://placehold.it/50x100',
      showCart: false,
    }
  },
  computed: {
    ...mapGetters(['cartItem']),
  },
  methods: {
    ...mapActions(['remove']),
  },
  mounted(){
    this.remove(item);
    axios.get('/api/cart')
      .then(data => {
        this.cartItems = data;
      });
  },
};
</script>