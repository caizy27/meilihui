<template>
  <div class="swiper-container czy">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>

      <div class="swiper-pagination"></div>

  </div>
</template>
<script>
import Swiper from 'swiper' // swiper js文件
import 'swiper/css/swiper.min.css' // swiper css

export default {
  mounted () {
  //  console.log(this.swipername)
    var defaultProps = {
      loop: true,
      // direction:"vertical",
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    }
    /* eslint-disable no-new */
    new Swiper('.' + (this.swipername ? this.swipername : 'czy'), { ...defaultProps, ...this.options })
  },
  props: ['options', 'swipername']
}

</script>
