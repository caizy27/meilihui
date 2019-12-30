<template>
  <div>
    <nav>
      <div class="top " >
            <a class="fanhui" @click="gotoClick">←</a>

            <a class="fanhui dian">· · ·</a>
        </div>
      <ul>
        <router-link
          v-for="(data, index) in datalist"
          :key="index"
          :to="data.path"
          tag="li"
        >
        {{data.title}}
        </router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [
        {
          path: '/film',
          title: '人气'

        },
        {
          path: '/cinema',
          title: '折扣'

        },
        {
          path: '/center',
          title: '价格'

        },
        {
          path: '/center',
          title: '筛选'

        }
      ]
    }
  },
  methods: {
    gotoClick () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>

  nav{
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 0.5rem;
    text-align: center;
    opacity: 0.8;
    font-size: 0.14rem;
    ul{
      display: flex;
      li{
        flex: 1;
        line-height: 0.5rem
      }
    }
  }
  .top{
        display: flex;
        height: .44rem;
        width: 100%;
        position:sticky;
        top:0;

      }

      .fanhui{
        height: .4rem;
        width: .8rem;
        display: block;
        font-size: .2rem;
        line-height: .4rem;
        text-align: center;
        margin-left: 0.1rem;
      }
      .dian{
        margin-left: 2.2rem;
      }
</style>
