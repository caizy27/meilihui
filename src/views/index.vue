<template>
    <div>
    <swiper>
      <div class="swiper-slide" v-for="data in $store.state.looplist" :key="data.id">
        <img :src="data.main_image" />
      </div>
    </swiper>
    <child ></child>
    <foot></foot>
    </div>

</template>

<script>
import swiper from '@/components/swiper'
import child from '@/views/soli/child1'
import foot from '@/views/soli/foot'
import 'swiper/css/swiper.min.css' // swiper css
export default {
  data () {
    return {
      // swiperList: []
    }
  },
  mounted () {
    // console.log(this.$store, '202121')
    this.$store.dispatch('getSwiperData')
  },
  components: {
    swiper,
    child,
    foot
  }
}
</script>

<style lang="scss" scoped>

.swiper-slide {

    img {
    width: 100%;
    height: 100%;
  }
}
</style>
