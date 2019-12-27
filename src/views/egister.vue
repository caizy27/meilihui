<template>
  <div>
     <div data-v-aa36b710="" data-v-8b16259e="" class="topbar" id="shoppingCartBar">
       <div data-v-aa36b710="" data-spm="NavbarBack" class="left">
         <a data-v-aa36b710="" class="back">
           <span data-v-aa36b710="" class="iconfont icon-zuojiantou" @click="goindexClick">

           </span>
           </a>
       </div>
           <div data-v-aa36b710="" class="title">
             <span data-v-aa36b710="">购物车</span>
            </div>
             <div data-v-aa36b710="" class="right">
               <div data-v-aa36b710="" data-spm="NavbarSwitch" class="switch-menu">
                 <a data-v-aa36b710="" class="show-menu">
                   <span data-v-aa36b710="" class="iconfont icon-gengduosangedian"></span>
                </a>
              </div>
            </div>
     </div>
     <div data-v-8b16259e="" class="no-login">
       <div data-v-8b16259e="" data-spm="cart-nosign" class="empty">
         <p data-v-8b16259e="">登录后可同步购物袋中的商品~
           <a data-v-8b16259e=""  class="" @click="gobackClick">立即登录</a>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    gobackClick () {
      this.$router.push('/login')
    },
    goindexClick () {
      this.$router.push('index')
    }
  },
  mounted () {
    this.$store.state.topisShow = false
  },
  destroyed () {
    this.$store.state.topisShow = true
  }
}
</script>

<style lang="scss" scoped>
.topbar[data-v-aa36b710] {
    z-index: 9999;
    width: 100%;
    height: 0.6rem;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: hsla(0,0%,100%,.95);
}
.left[data-v-aa36b710], .right[data-v-aa36b710] {
    width: 6.8rem;
    height: 0.6rem;
    position: relative;
    z-index: 10;
}
back[data-v-aa36b710], .show-menu[data-v-aa36b710], .switch-menu[data-v-aa36b710] {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
}
a {
    text-decoration: none;
    color: #007aff;
    cursor: pointer;
}
a, input, select, textarea {
    outline: 0;
}
.back span[data-v-aa36b710], .show-menu span[data-v-aa36b710] {
    display: block;
    height: 0.16rem;
    position: absolute;
    top: .2rem;
    color: #222;
}
.back span[data-v-aa36b710] {
    width: .283333rem;
    left: .4rem;
    font-size: .183333rem;
}
.iconfont {
    font-family: iconfont!important;
    font-size: .113333rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.title[data-v-aa36b710] {
    position: relative;
    z-index: 10;
}
.title span[data-v-aa36b710] {
    display: block;
    width: 1.566667rem;
    height: 0.573333rem;
    font-size: .226667rem;
    font-weight: 350;
    overflow: hidden;
    line-height: 0.573333rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: uppercase;
    text-align: center;
}
.left[data-v-aa36b710], .right[data-v-aa36b710] {
    width: 0.66rem;
    height: 0.573333rem;
    position: relative;
    z-index: 10;
}
.back[data-v-aa36b710], .show-menu[data-v-aa36b710], .switch-menu[data-v-aa36b710] {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;

}
.no-login[data-v-8b16259e] {
    padding-top: 0.526667rem;
}
.empty[data-v-8b16259e] {
    width: 100%;
    padding-top: 1.346667rem;
    background: url(https://cdn12.mei.com/h5_vue/static/img/shoppingcart-empty.2fb1458.png) top no-repeat;
    background-size: 0.933333rem 1.413333rem;
}
.empty p[data-v-8b16259e] {
    text-align: center;
    color: #999;
    font-size: .153333rem;
}
.ios .empty a[data-v-8b16259e] {
    border: .013333rem solid #000;
}
.empty p a[data-v-8b16259e] {
    display: block;
    width: 1.14rem;
    height: .406667rem;
    margin: .086667rem auto .826667rem;
    line-height: .406667rem;
    color: #000;
    font-size: .143333rem;
    box-shadow: 0.013333rem 0.013333rem 0 0 #000, -0.013333rem -0.013333rem 0 0 #000;
}
</style>
