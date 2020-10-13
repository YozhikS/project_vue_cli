<template>
  <div>
    <Breadcrumb/>
    <div class="central_content center">
      <aside>
        <details class="category" open>
          <summary class="category_head">Category
          </summary>
          <ul class="list_category">
            <li class="link"><a href="#" class="link_category">Accessories </a></li>
            <li class="link"><a href="#" class="link_category">Bags </a></li>
            <li class="link"><a href="#" class="link_category">Denim Hoodies &amp; Sweatshirts </a></li>
            <li class="link"><a href="#" class="link_category">Jackets &amp; Coats </a></li>
            <li class="link"><a href="#" class="link_category">Pants </a></li>
            <li class="link"><a href="#" class="link_category">Polos </a></li>
            <li class="link"><a href="#" class="link_category">Shirts </a></li>
            <li class="link"><a href="#" class="link_category">Shoes </a></li>
            <li class="link"><a href="#" class="link_category">Shorts </a></li>
            <li class="link"><a href="#" class="link_category">Sweaters &amp; Knits </a></li>
            <li class="link"><a href="#" class="link_category">T-Shirts </a></li>
            <li class="link"><a href="#" class="link_category">Tanks</a></li>
          </ul>
        </details>
        <details class="brand">
          <summary class="category_head">Brand
          </summary>
          <ul class="list_category">
            <li class="link"><a href="#" class="link_category">Accessories </a></li>
            <li class="link"><a href="#" class="link_category">Bags </a></li>
          </ul>
        </details>
        <details class="designer">
          <summary class="category_head">designer
          </summary>
          <ul class="list_category">
            <li class="link"><a href="#" class="link_category">Accessories </a></li>
            <li class="link"><a href="#" class="link_category">Bags </a></li>
          </ul>
        </details>
      </aside>
      <content class="content">
        <div class="filter">
          <div class="top_filter">
            <div class="top_filter_trending_now">
              <div class="top_filter_trending_now_text">Trending now</div>
              <a href="#" class="top_filter_trending_now_text_a">Bohemian</a>
              <a href="#" class="top_filter_trending_now_text_a">Floral</a>
              <a href="#" class="top_filter_trending_now_text_a">Lace</a>
              <a href="#" class="top_filter_trending_now_text_a">Floral</a>
              <a href="#" class="top_filter_trending_now_text_a">Lace</a>
              <a href="#" class="top_filter_trending_now_text_a">Bohemian</a>
            </div>
            <div class="top_filter_size">
              <div class="top_filter_size_header">Size</div>

              <input type="checkbox" id="XXS" class="top_filter_size_chekbox">
              <label class="top_filter_size_text" for="XXS">XXS</label>

              <input type="checkbox" id="XS" class="top_filter_size_chekbox">
              <label class="top_filter_size_text" for="XS">XS</label>

              <input type="checkbox" id="S" class="top_filter_size_chekbox">
              <label class="top_filter_size_text" for="S">S</label>

              <input type="checkbox" id="M" class="top_filter_size_chekbox">
              <label class="top_filter_size_text" for="M">M</label>

              <input type="checkbox" id="L" class="top_filter_size_chekbox">
              <label class="top_filter_size_text" for="L">L</label>

              <input type="checkbox" id="XL" class="top_filter_size_chekbox">
              <label class="top_filter_size_text" for="XL">XL</label>

              <input type="checkbox" id="XXL" class="top_filter_size_chekbox">
              <label class="top_filter_size_text" for="XXL">XXL</label>
            </div>
            <div class="top_filter_price">
              <div class="top_filter_price_text">pRICE</div>
              <label for="price"></label>
              <input id="price" type="range">
              <div class="top_filter_price_min_max">
                <div class="top_filter_price_min">$52</div>
                <div class="top_filter_price_max">$400</div>
              </div>
            </div>
          </div>
          <div class="sort">
            <div class="sort_filter">
              <div class="sort_filter_1">
                <div class="sort_by">Sort By</div>
                <select class="sort_name">
                  <option>Name 1</option>
                  <option>Name 2</option>
                </select>
              </div>
              <div class="sort_filter_2">
                <div class="sort_show">Show</div>
                <select class="sort_namber">
                  <option>09</option>
                  <option>08</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="catalog__product">
          <Products class="product_tovar_cart" id="catalogOfCatalog"/>
        </div>
      </content>
    </div>
    <div class="feature_box_banner center">
      <section class="feature_box_banner_delivery">
        <img class="feature_box_banner_img" src="@/assets/imgs/delivery.png" alt="">
        <h1 class="feature_box_banner_h1">Free Delivery</h1>
        <p class="feature_box_banner_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
          with extensive models.</p>
      </section>
      <section class="feature_box_banner_delivery">
        <img class="feature_box_banner_img" src="@/assets/imgs/sales.png" alt="">
        <h1 class="feature_box_banner_h1">Sales &amp; discounts</h1>
        <p class="feature_box_banner_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
          with extensive models.</p>
      </section>
      <section class="feature_box_banner_delivery">
        <img class="feature_box_banner_img" src="@/assets/imgs/quality.png" alt="">
        <h1 class="feature_box_banner_h1">Quality assurance</h1>
        <p class="feature_box_banner_p">Worldwide delivery on all. Authorit tively morph next-generation innov tion
          with extensive models.</p>
      </section>
    </div>
    <Subscribe/>
    <Footer/>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import Products from '@/views/Products';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default {
  name: 'Catalog',
  components: {
    Breadcrumb,
    Products,
    Subscribe,
    Footer,
  },
}
</script>