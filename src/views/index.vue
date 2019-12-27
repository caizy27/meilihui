<template>
    <div>

    <swiper >
      <div class="swiper-slide" v-for="data in $store.state.looplist" :key="data.id">
        <img :src="data.main_image" />
      </div>
    </swiper>
    <exercise></exercise>
    <child ></child>

    </div>

</template>

<script>
import swiper from '@/components/swiper'
import child from '@/views/soli/child1'
import exercise from '@/views/soli/exercise'

import 'swiper/css/swiper.min.css' // swiper css
export default {
  data () {
    return {
      // swiperList: []
    }
  },
  mounted () {
    console.log(this.$store, '202121')
    this.$store.dispatch('getSwiperData')
  },
  components: {
    swiper,
    child,
    exercise

  }
}
</script>

<style lang="scss" scoped>

.swiper-slide {
  margin-top: 0.19rem;
    img {
    width: 100%;
    height: 100%;
  }
}
</style>
