<template>
  <div>
    <Breadcrumb/>
    <main class="sc center">
      <div class="sc_product_cols_name">
        <h1 class="sc_product_cols_name_h1">Product&nbsp;Details</h1>
        <h1 class="sc_product_cols_name_h1">unite Price</h1>
        <h1 class="sc_product_cols_name_h1">Quantity</h1>
        <h1 class="sc_product_cols_name_h1">shipping</h1>
        <h1 class="sc_product_cols_name_h1">Subtotal</h1>
        <h1 class="sc_product_cols_name_h1">ACTION</h1>
      </div>
      <div class="sc_product">
        <artical class="sc_product_cart">
          <a href="single_page.html" class="sc_product_cart_a">
            <img src="https://raw.githubusercontent.com/YozhikS/static/master/img/sc_1.png" alt="" class="sc_product_cart_a_img">
          </a>
          <div class="sc_product_cart_info">
            <a href="single_page.html" class="sc_product_cart_info_h1">Mango People T-shirt</a>
            <div class="sc_product_cart_info_color"><span>Color:</span> Red</div>
            <div class="sc_product_cart_info_size"><span>Size:</span> Xll</div>
          </div>
          <div class="sc_product_cart_price">$150</div>
          <input class="sc_product_cart_quantity" type="number" min="0" max="99">
          <div class="sc_product_cart_shipping">FREE</div>
          <div class="sc_product_cart_subtotal">$300</div>
          <div class="sc_product_cart_action"><a href="#"><i class="fas fa-backspace"></i></a></div>
        </artical>
        <artical class="sc_product_cart">
          <a href="single_page.html" class="sc_product_cart_a">
            <img src="https://raw.githubusercontent.com/YozhikS/static/master/img/sc_2.png" alt="" class="sc_product_cart_img">
          </a>
          <div class="sc_product_cart_info">
            <a href="single_page.html" class="sc_product_cart_info_h1">Mango People T-shirt</a>
            <div class="sc_product_cart_info_color">Color: Red</div>
            <div class="sc_product_cart_info_size">Size: Xll</div>
          </div>
          <div class="sc_product_cart_price">$150</div>
          <input class="sc_product_cart_quantity" type="number" min="0" max="99">
          <div class="sc_product_cart_shipping">FREE</div>
          <div class="sc_product_cart_subtotal">$300</div>
          <div class="sc_product_cart_action"><a href="#"><i class="fas fa-backspace"></i></a></div>
        </artical>
        <artical class="sc_product_cart">
          <a href="single_page.html" class="sc_product_cart_a">
            <img src="https://raw.githubusercontent.com/YozhikS/static/master/img/sc_3.png" alt="" class="sc_product_cart_img">
          </a>
          <div class="sc_product_cart_info">
            <a href="single_page.html" class="sc_product_cart_info_h1">Mango People T-shirt</a>
            <div class="sc_product_cart_info_color">Color: Red</div>
            <div class="sc_product_cart_info_size">Size: Xll</div>
          </div>
          <div class="sc_product_cart_price">$150</div>
          <input class="sc_product_cart_quantity" type="number" min="0" max="99">
          <div class="sc_product_cart_shipping">FREE</div>
          <div class="sc_product_cart_subtotal">$300</div>
          <div class="sc_product_cart_action"><a href="#"><i class="fas fa-backspace"></i></a></div>
        </artical>
        <div class="sc_button">
          <button class="sc_button_clear">cLEAR SHOPPING CART</button>
          <button class="sc_button_continue">cONTINUE sHOPPING</button>
        </div>
      </div>
      <div class="sc_info">
        <div class="sc_info_address">
          <div class="sc_info_address_h1">Shipping Adress</div>
          <form action="" class="sc_info_address_form">
            <select class="sc_info_address_cantry">
              <option value="">Bangladesh</option>
              <option value="">Bangladesh</option>
              <option value="">Bangladesh</option>
            </select>
            <input type="text" class="sc_info_address_state" placeholder="State">
            <input type="text" class="sc_info_address_zip" placeholder="Postcode / Zip">
            <button class="sc_info_address_button">get a quote</button>
          </form>
        </div>
        <div class="sc_info_coupon">
          <div class="sc_info_coupon_h1">coupon discount</div>
          <form action="" class="sc_info_coupon_form">
            <div class="sc_info_coupon_text">Enter your coupon code you have one</div>
            <input type="text" class="sc_info_coupon_number" placeholder="State">
            <button class="sc_info_coupon_button">Apply coupon</button>
          </form>
        </div>
        <div class="sc_info_total">
          <div class="sc_info_total_sub">Sub total $900</div>
          <div class="sc_info_total_grund">GRAND TOTAL <span class="siteColor">$900</span></div>
          <button class="sc_info_total_button" onclick="location ='checkout.html'">proceed to checkout</button>
        </div>
      </div>
    </main>
    <Subscribe/>
    <Footer/>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default {
  name: 'CartProduct',
  components: {
    Breadcrumb,
    Subscribe,
    Footer,
  },
  
}
</script>