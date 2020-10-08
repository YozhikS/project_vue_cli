<template>
  <div>
    <Product v-for="item of filtered" :key="item.id_product" :product="item" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Product from "@/views/Product";

export default {
  name: 'Products',
  components: { Product },
  computed: {
    ...mapGetters(['filtered']),
  },
  methods: {
    ...mapActions(['getProducts']),
  },
  mounted() {
    this.getProducts("/api/products");
  },
};
</script>