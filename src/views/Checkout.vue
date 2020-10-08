<template>
  <div>
    <Breadcrumb/>
    <main class="center">
      <section class="chekout">
        <div class="chekout_h1">01. Shipping Adress</div>
        <div class="form">
          <form class="form_guest">
            <div class="form_h2">Check as a guest or register</div>
            <div class="form_h3">Register with us for future convenience</div>
            <input type="radio" name="guest_or_reg" id="guest" class="form_radio">
            <label for="guest" class="form_label">checkout as guest</label><br>
            <input type="radio" name="guest_or_reg" id="reg" class="form_radio">
            <label for="reg" class="form_label">register</label>
            <div class="form_h2">register and save time!</div>
            <div class="form_h3">Register with us for future convenience</div>
            <details class="form_details">
            <summary class="form_summary">Fast and easy checkout</summary>
            <ul class="form_summary_ul">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            </details>
            <details class="form_details">                    
            <summary class="form_summary">Easy access to your order history and status</summary>
            </details>
            <button class="checkout_button">cONTINUE</button>
          </form>
          <form class="form_reg">
            <div class="form_h2">Already registed?</div>
            <div class="form_h3">Please log in below</div>
            <div class="form_input_name">EMAIL ADDRESS <span class="siteColor">*</span></div>
            <input type="email" class="form_input_text">
            <div class="form_input_name">PASSWORD <span class="siteColor">*</span></div>
            <input type="password" class="form_input_text">
            <div class="Required">* Required Fileds</div>
            <button class="checkout_button">Log in</button>
            <button class="button_forgot">Forgot Password ?</button>
          </form>
        </div>
      </section>

      <section class="chekout">
        <div class="chekout_h1">02. BILLING INFORMATION</div>
      </section>


      <section class="chekout">
        <div class="chekout_h1">03. SHIPPING INFORMATION</div>
      </section>

      <section class="chekout">
        <div class="chekout_h1">04. SHIPPING METHOD</div>
      </section>

      <section class="chekout">
        <div class="chekout_h1">05. PAYMENT METHOD</div>
      </section>

      <section class="chekout">
        <div class="chekout_h1">06. ORDER REVIEW</div>
      </section>
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
  name: 'Checkout',
  components: {
    Breadcrumb,
    Subscribe,
    Footer,
  },  
}
</script>