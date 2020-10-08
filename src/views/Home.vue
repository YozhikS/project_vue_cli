<template>
  <main>
    <Menu/>
    <div class="banner center">
      <div class="banner_right">
        <div class="banner_hot_deal">
          <a href="#"><img src="../src/assets/imgs/bannner_hot_deal.png" alt="">
            <div class="badge">
              <h1>Hot deal</h1>
              <p class="siteColor">FOR MEN</p>
            </div>
          </a>
        </div>
        <div class="banner_luxirous">
          <a href="#"><img src="../src/assets/imgs/banner_luxirous.png" alt="">
            <div class="badge">
              <h1>LUXIROUS &amp; trendy</h1>
              <p class="siteColor">ACCESORIES</p>
            </div>
          </a>
        </div>
      </div>
      <div class="banner_left">
        <div class="banner_offer">
          <a href="#"><img src="../src/assets/imgs/banner_offer.png" alt="">
            <div class="badge">
              <h1>30% offer</h1>
              <p class="siteColor">women</p>
            </div>
          </a>
        </div>
        <div class="banner_new">
          <a href="#"><img src="../src/assets/imgs/banner_new.png" alt="">
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
      <div class="product_tovar_cart" id="catalog">

      </div>
      <div class="prduct_bottom">
        <button class="button">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></button>
      </div>
      <div class="feature">
        <div class="feature_banner">
          <img src="../src/assets/imgs/feature_banner.png" alt="">
          <img class=feature_shadow src="../src/assets/imgs/feature_banner_shadow.png" alt="">
          <div class="feature_text">
            <h1>30%<span class="siteColor"> OFFER</span></h1>
            <p>FOR WOMEN</p>
          </div>
        </div>
        <artical class="feature_box_delivery">
          <img src="../src/assets/imgs/delivery.png" alt="">
          <h1>Free Delivery</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </artical>
        <artical class="feature_box_sales">
          <img src="../src/assets/imgs/sales.png" alt="">
          <h1>Sales &amp; discounts</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </artical>
        <artical class="feature_box_quality">
          <img src="../src/assets/imgs/quality.png" alt="">
          <h1>Quality assurance</h1>
          <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </artical>
      </div>
    </section>
    <!-- <Products/> -->
    <Error/>
    <Subscribe/>
    <Footer/>
  </main>
</template>

<script>
import Menu from '@/views/Menu';
import Error from '@/views/Error';
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
