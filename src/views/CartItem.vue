<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="img" alt="Some image">
      <div class="product-desc">
        <p class="product-title">{{cartItem.product_name}}</p>
        <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
        <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
      <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['cartItem', 'img'],
};
</script>