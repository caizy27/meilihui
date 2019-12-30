<template>
    <div v-if="list.length">
        <div class="top " >
            <a class="fanhui" @click="gotoClick">←</a>
            <div>
              <span class="sp sp1">{{filmInfo.brand}}</span>
              <span class="sp sp2">￥{{filmInfo.price}}</span>
            </div>
            <a class="fanhui">· · ·</a>
        </div>

        <img :src="list[0].bigImgUrl"/>
        <div class="mid">
          <h1>{{filmInfo.name}}</h1>
          <strong class="sp2">￥ {{filmInfo.price}}</strong>
          <span class="zhe">{{filmInfo.discount}}</span>
          <h3>⏰{{filmInfo.deliver_date}}</h3>
        </div>

        <div class="bottom">
          <h2>商品参数：</h2>
            <ul >
                <li v-for="data in canshuList" :key="data.id"><p class="name">{{data.name}}</p> <span class="value">{{data.value}}</span></li>
            </ul>
        </div>

      <div class="shoping">
        <a>购物车</a>
        <span>加入购物车</span>
        <span class="sp2">立即购买</span>
      </div>
    </div>
</template>

  <style lang="scss" scoped>
      img{
        width: 80%;
        height: 4rem;
        margin: 0 auto;
        border: 0.02rem solid #ccc;
      }

      *{
        padding: 0;
        margin: 0;
      }

      .top{
        display: flex;
        height: .44rem;
        width: 100%;
        position:sticky;
        top:0;
        background: white;
        opacity: .7;

      }

      .fanhui{
        height: .4rem;
        width: .8rem;
        display: block;
        font-size: .2rem;
        line-height: .4rem;
        text-align: center;
      }

      .sp{
        height: .17rem;
        width: 2.8425rem;
        display: block;
        float: left;
        text-align: center;
        line-height: .17rem;
        font-size: 0.14rem;

      }
      .top:nth-child(1){
        font-size: .12rem;
      }
      .sp2{

         color: #dd2828;
      }

      h1{

        font-size: .2rem;
        color: #000;
        padding-bottom: .133333rem;
        text-transform: uppercase;
        text-align: center;
      }

      .mid{
        margin: 0 auto;
        width: 3.35rem;
        padding-bottom:.2rem;
        border-bottom: .01rem solid #ccc;
      }

      strong{
        font-size: .2rem;
        margin-right: .1rem;
        padding-left: .1rem;
      }

      .zhe{
        border: .01rem solid black;
      }

      .bottom{
        margin: 0 auto;
        width: 3.35rem;
        padding-bottom:.5rem;
        border-bottom: .01rem solid #ccc;
      }

      h3{
            color: #666;
            font-size: .12rem;
            padding-left: .1rem;
            padding-top: .25rem;
            padding-bottom: .2rem;
      }

      li{
        width: 3.35rem;
        height: .34rem;
        padding: 0 0 .4rem
      }

  .name{
    float: left;
    width: 1rem;
    height: .19rem;
    color: #999;
    font-size: .16rem;
  }

  .value{
        float: left;
        font-size: .14rem;
  }

  .shoping{
    z-index: 1000;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: .5rem;
    box-shadow: 0 -0.04rem 0.08rem 0 rgba(0,0,0,.05);
    a{
      float: left;
      text-align: center;
      position: relative;
      height: .5rem;
      width: .6rem;
      font-size: .16rem;
      line-height: .5rem;
      border-right: .01rem solid #ccc;
    }
    span{
      width: 1.5rem;
      height: .5rem;
      font-size: .18rem;
      text-align: center;
      line-height: .5rem;
      display: inline-block;

    }
    .sp2{
        border-left: .01rem solid #ccc;
      }
  }
</style>

<script>
import Axios from 'axios'

export default {

  destroyed () {
    this.$store.state.topisShow = true
  },
  data () {
    return {
      filmInfo: [],
      list: [],
      canshuList: []
    }
  },

  mounted () {
    this.list = this.$route.params.childid
    console.log(this.$route, 111111111)
    Axios({
      url: `http://www.mei.com/appapi/product/detail/v3?categoryId=2041204190000007498&productId=${this.list}&platform_code=H5&timestamp=1577242810485&summary=dd33ddb48a74cc868d1e712eb155b8d7`

    }).then(res => {
      this.filmInfo = res.data.infos
      this.list = res.data.infos.description.product_img1
      this.canshuList = res.data.infos.description.attributesList
      console.log(this.$route.params.childid)
    })
    this.$store.state.topisShow = false
  },
  methods: {
    gotoClick () {
      this.$router.go(-1)
      console.log(1111)
    }
  }

}

</script>
