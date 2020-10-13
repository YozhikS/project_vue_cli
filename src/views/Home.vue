<template>
  <div>
    <Menu/>
    <div class="promo center">
      <div class="promo__content">
        <h1>THE BRAND</h1>
        <p>OF LUXERIOUS <span class="siteColor">FASHION</span></p>
      </div>
    </div>
    <div class="banner center">
      <div class="banner_right">
        <div class="banner_hot_deal">
          <a href="#"><img src="../assets/imgs/bannner_hot_deal.png" alt="">
            <div class="badge">
              <h1>Hot deal</h1>
              <p class="siteColor">FOR MEN</p>
            </div>
          </a>
        </div>
        <div class="banner_luxirous">
          <a href="#"><img src="../assets/imgs/banner_luxirous.png" alt="">
            <div class="badge">
              <h1>LUXIROUS &amp; trendy</h1>
              <p class="siteColor">ACCESORIES</p>
            </div>
          </a>
        </div>
      </div>
      <div class="banner_left">
        <div class="banner_offer">
          <a href="#"><img src="../assets/imgs/banner_offer.png" alt="">
            <div class="badge">
              <h1>30% offer</h1>
              <p class="siteColor">women</p>
            </div>
          </a>
        </div>
        <div class="banner_new">
          <a href="#"><img src="../assets/imgs/banner_new.png" alt="">
            <div class="badge">
              <h1>new arrivals</h1>
              <p class="siteColor">FOR kids</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <section class="product center">
      <div class="product_top">
        <h1>Fetured Items</h1>
        <p>Shop for items based on what we featured in this week</p>

      </div>
        <!-- тут вывести все продукты -->
        <Products class="product_tovar_cart" id="catalog"/>
      <div class="prduct_bottom">
        <button class="button">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></button>
      </div>
      <div class="feature">
        <div class="feature_banner">
          <img src="../assets/imgs/feature_banner.png" alt="">
          <img class=feature_shadow src="../assets/imgs/feature_banner_shadow.png" alt="">
          <div class="feature_text">
            <h1>30%<span class="siteColor"> OFFER</span></h1>
            <p>FOR WOMEN</p>
          </div>
        </div>
        <div class="feature_box_delivery">
          <img src="../assets/imgs/delivery.png" alt="">
          <h1>Free Delivery</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="feature_box_sales">
          <img src="../assets/imgs/sales.png" alt="">
          <h1>Sales &amp; discounts</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
        <div class="feature_box_quality">
          <img src="../assets/imgs/quality.png" alt="">
          <h1>Quality assurance</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </div>
      </div>
    </section>
    <Error/>
    <Subscribe/>
    <Footer/>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import Error from '@/components/Error';
import Products from '@/views/Products';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    Menu,
    Error,
    Products,
    Subscribe,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.promo {
  background-image: url(../assets/imgs/promo.png);
}
</style>