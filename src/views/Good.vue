<template>
  <div>
    <Breadcrumb/>
    <main class="singlePage">
      <Preloader v-if="loading"/>
      <div v-else-if="goodData" class="singlePage__slider">
        <div class="slider__pagination slider__pagination_left"><a href="#"><i class="fas fa-angle-left"></i></a>
        </div>
        <img class="singlePage__slider_img" src="../src/assets/imgs/slide_img.png" alt="">
        <div class="slider__pagination slider__pagination_right"><a href="#"> <i class="fas fa-angle-right"></i></a>
        </div>
      </div>
      <Preloader v-if="loading"/>
      <div v-else-if="goodData" class="discription">
        <div class="discription__nameColection">WOMEN COLLECTION</div>
        <div class="discription__shape">
          <div class="discription__shape_default"></div>
          <div class="discription__shape_default discription__shape_active"></div>
          <div class="discription__shape_default"></div>
        </div>
        <div class="discription__heading">{{ goodData.title }}</div>
        <div class="discription__text">Compellingly actualize fully researched processes before proactive
          outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
          Completely visualize parallel core competencies rather than exceptional portals.
          <div class="discription__characteristics">
            <span>MATERIAL: <span class="discription__characteristics_text">COTTON</span></span>
            <span>DESIGNER: <span class="discription__characteristics_text">BINBURHAN</span></span>
          </div>
        </div>
        <div class="discription__price">${{ goodData.price }}</div>

        <form class="chooseFilter">
          <div class="chooseFilter__header">
            <div class="chooseFilter__header_color">CHOOSE COLOR</div>
            <div class="chooseFilter__header_size">CHOOSE SIZE</div>
            <div class="chooseFilter__header_quntity">QUANTITY</div>
          </div>

          <select class="chooseFilter__select">
              <option value="Red">Red</option>
          </select>
          <select class="chooseFilter__select">
            <option value="XXL">XXL</option>
          </select>
          <input type="number" min="1" max="99" class="chooseFilter__quantity"><br>
          <button class="chooseFilter__button">Add to Cart</button>
        </form>
      </div>
    </main>
    <Subscribe/>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb';
import Preloader from '@/components/Preloader';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default {
  name: 'Good',
  components: {
    Breadcrumb,
    Preloader,
    Subscribe,
    Footer,
  },
  computed: {
    ...mapGetters(['goodData', 'loading']),
  },
  methods: {
    ...mapActions(['fetchGoodData']),
  },
  mounted(){
    this.fetchGoodData(this.$route.params.id);
  },
};
</script>