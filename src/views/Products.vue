<template>
  <div v-if="id === 'catalog'">
    <Product v-for="item of filtered" :key="item.productId" :product="item" name="add_to_cart" />
  </div>
  <div v-else>  
    <Product v-for="item of filtered" :key="item.productId" :product="item"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Product from "@/views/Product";

export default {
  name: 'Products',
  components: { Product },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(['filtered']),
  },
  methods: {
    ...mapActions(['getProducts']),
  },
  mounted() {
    // this.getProducts("/api/products");
    this.getProducts("https://raw.githubusercontent.com/YozhikS/static/master/JSON/catalog.json");
  },
};
</script>