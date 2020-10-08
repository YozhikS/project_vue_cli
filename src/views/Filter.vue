<template>
  <form action="#" class="search-form" @submit.prevent="filter(userSearch)">
    <input type="text" class="search-field" v-model="userSearch">
    <button class="btn-search" type="submit">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Search',
  data(){
    return {
      userSearch: ''
    }
  },
  methods: {
    ...mapActions(['filter']),
  },
};
</script>