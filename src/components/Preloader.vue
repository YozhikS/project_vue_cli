<template>
  <div class="preloader"></div>
</template>

<script>
export default {
  name:'Preloader',
}
</script>

<style scoped>
  .preloader {
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-image: url('../assets/preloader.svg');
  }
</style>