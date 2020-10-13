<template>
  <div>
    <header class="header center">
      <div class="header__left">
        <a href="#" class="logo">
          <img class="logo__img" src="../src/assets/imgs/logo.png" alt="logo">
          <h1 class="logo__img_h1">BRAN<span class="siteColor">D</span></h1>
        </a>
        <form class="header__form" action="">
              <details class="header__browse">
                  <summary class="header__browse_summary">Browse</summary>
                  <div class="drop">
                      <div class="drop__flex">
                          <h3 class="drop__h3">Women</h3>
                          <ul class="drop__ul">
                              <li><a href="#" class="drop__link">Dresses</a></li>
                              <li><a href="#" class="drop__link">Tops</a></li>
                              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                              <li><a href="#" class="drop__link">Blazers</a></li>
                              <li><a href="#" class="drop__link">Denim</a></li>
                              <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                              <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                              <li><a href="#" class="drop__link">Accessories</a></li>
                              <h3 class="drop__h3">Women</h3>
                              <ul class="drop__ul">
                                  <li><a href="#" class="drop__link">Dresses</a></li>
                                  <li><a href="#" class="drop__link">Tops</a></li>
                                  <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                  <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                              </ul>
                          </ul>
                      </div>
                  </div>
              </details>
              <input type="text" placeholder="Search for Item...">
              <button class="header__button"><img src="../src/assets/imgs/search.png" alt="search"></button>
        </form>
      </div>
      <div class="header__right">
        <div class="header__right_img">
          <a href="ShoppingCart.html">
            <img class="header__cart" src="../src/assets/imgs/cart.png" alt="cart">                    
          </a>
          <div class="header__cart_quantity"></div>
          <ul class="myCart__list">
            <ul id="myCart">
              <h3 class = "myCart__text">Корзина пуста</h3>
            </ul>
            <div class="totalCoast">
              <div class="totalCoast__text">TOTAL</div>
              <div class="totalCoast__text" id="totalCoast">$0.00</div>
            </div>
            <div class=" myCart__button" onclick="location ='checkout.html'">Checkout</div>
            <div class=" myCart__button" onclick="location ='ShoppingCart.html'">Go to cart</div>
          </ul>
        </div>
          <details class="button">
            <summary class="myAccount">My account</summary>
            <ul class="myAccount__list">
              <li class="myAccount__link">
                <a href="#"> Регистрация</a>
              </li>
              <li class="myAccount__link">
                <a href="#"> Регистрация</a>
              </li>
            </ul>
          </details>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import Search from '@/views/Filter';
import Cart from '@/views/Cart';

export default {
  components: { Search, Cart },
};
</script>
<style lang="scss">
</style>
