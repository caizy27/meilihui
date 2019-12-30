<template>
  <div>
    <!-- <tabber v-if="$store.state.topisShow" class="tarbar1"></tabber> -->
    <tabber v-if="$store.state.topisShow"   v-show="isFiexd" ref="tarbar" class="fixed" ></tabber>

     <router-view></router-view>

    <foot v-if="$store.state.topisShow"></foot>
  </div>
</template>
<script>
import tabber from '@/components/tarbar'
import foot from '@/views/soli/foot'

export default {
  data () {
    return {
      isFiexd: true
    }
  },
  methods: {
    handleScroll () {
      if (this.$refs.tarbar.$el.offsetHeight + 100 <= (document.documentElement.scrollTop || document.body.scrollTop)) {
        this.$refs.tarbar.$refs.qq.style.background = '#5b5b5b'
        this.$refs.tarbar.$refs.ww.style.background = '#5b5b5b'
        this.isFiexd = true
      } else {
        // console.log(this.isFiexd, this.$refs.tarbar.$el.offsetHeight, document.documentElement.scrollTop, 2)
        // this.isFiexd = false
        // this.$refs.tarbar.$el.style.background=""
        this.$refs.tarbar.$refs.qq.style.background = ''
        this.$refs.tarbar.$refs.ww.style.background = ''
      }
    }
  },

  components: {
    tabber,
    foot

  },
  mounted () {
    window.onscroll = () => {
      this.handleScroll()
    }
  },
  beforeDestroy () {
    window.onscroll = null
  }
}
</script>
<style lang="scss" scoped>

a{
  text-decoration: none
}
.fixed{
    position: fixed !important;
    z-index:10;
    width: 100%;
    top:0;
    left:0;
    background:transparent;
  }

</style>
