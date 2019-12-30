<template>
<div class="all" ref="qq">

<div class="demo-input-suffix" >
  <a @click="pagesClick">登录</a>
  <input type="text" class="top"
  @input="inputClick()"
  @click="inputClick"
  v-model="input2"
  >

<i class="iconfont icon-gouwuche" @click="carhandClick"></i>
  <div class="input">
    <ul class="search">
      <li v-for="(data,index) in inputlist" :key="index" class="search_li">
          <!-- {{data}}
          {{input2}} -->
      </li>
    </ul>
    </div>
</div>
<ul ref="ww">
  <li @click="handindexClick">推荐</li>
  <li v-for="(data,index) in datalist" :key="data.categoryId" @click="handClick(data.categoryId,index)">
    {{data.name}}
  </li>
</ul>

</div>
</template>
<script>
import axios from 'axios'

export default {

  data () {
    return {
      // isFiexd: false,
      input2: '',
      inputlist: [],
      datalist: [],
      urlList: ['crossborder', 'women', 'men', 'cosmetics', 'lifestyle', 'kids']
    }
  },
  methods: {
    handClick (id, ind) {
      console.log(ind)
      var aa = this.urlList[ind]
      this.$router.push(`/soli/${aa}`)
    },
    pagesClick () {
      this.$router.push(`login`)
    },
    handindexClick () {
      console.log('1111')
      this.$router.push(`/index`)
    },
    carhandClick () {
      this.$router.push(`egister`)
    },

    inputClick () {
      this.$router.push(`/soli/search`)
    }
    // handleScroll () {
    //   if (this.$refs.tarbar.clientHeight >= document.documentElement.scrollTop) {
    //      console.log(1)
    //     this.isFiexd = false
    //   } else {
    //      console.log(2)
    //     this.isFiexd = true
    //   }
    // }

  },
  mounted () {
    axios.get('http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1577103146663&summary=3a848c1bd2227255e7b1b750f116fc26').then(res => {
      // console.log(res.data)
      this.datalist = res.data.lists
    })
    // window.onscroll = this.handleScroll
  }

}

</script>
<style lang="scss" scoped>
  .demo-input-suffix {
    height: .4rem;
    display: flex;
    color: white;
    a{
      display: block;
      width: 15%;
      font-size: .16rem;
      text-align: center;
      line-height: .4rem;
      color: white;
    }

    .top{
      width: 3rem;
      margin-top:.05rem ;
      margin-bottom:.05rem ;
      height: 0.3rem;
      border: none;
      padding-left:.1rem ;
      background: white;
      opacity: .4;
    }
    span{
      flex: 1;
      display: inline-block;
      width: 1rem;
      margin-top: 0.1rem;
      margin-left:0.2rem;
    }
    .iconfont {
      width: 15%;
      font-size: 0.25rem;
      text-align: center;
      line-height: .4rem;
    }
  }
  .swiper-slide{
    margin-top: 0.2rem;
  }
  .all{

    height: 0.6rem;
    // width: 100%;

  }
  ul{
    display: flex;
    list-style: none;
    background: transparent;
    z-index: 999999;
    position: fixed;
    width: 3.75rem;
    li{
      flex: 1;
      font-size: 0.12rem;
      color: #fff;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
    }
  }

  // .fixed{
  //   position: fixed;
  //   top:0px;
  //   left:0px;
  //   background:black;
  //   height: 0.8rem;
  //   // line-height: 40px;
  //   width:100%;
  // }
  //  .input{
  //  position: absolute;
  //   top:0.58rem;
  //    left:0;
  //   background: red;
  // //   z-index: 10;
  // width:100%;
  // height: 6rem;
  // overflow: hidden;}
  // .input .search{
  //   float: left;
  //   width: .5rem;
  //   height: 6rem;

  //   }
  //   .input .search .search_li{
  //     float: left;
  //    flex: 1;
  //    height: 0.6rem;
  //    width: 0.4rem;
  //   }

</style>
