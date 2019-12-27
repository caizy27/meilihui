<template>
<div class="all" ref="tarbar" :class="isFiexd?'fixed':' '" >

<div class="demo-input-suffix">
  <a><span>登录</span></a>
<el-input
    placeholder=""
    prefix-icon="el-icon-search"
    v-model="input2"
    type='text'
    @input="inputClick()">
</el-input>
<i class="iconfont icon-cart"></i>
  <div class="input">
    <ul class="search">
      <li v-for="(data,index) in inputlist" :key="index" class="search_li">
          <!-- {{data}}
          {{input2}} -->
      </li>
    </ul>
    </div>
</div>
<ul v-if=datalist.length>
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
  props: [
    'isfiexd'
  ],
  data () {
    return {
      isFiexd: false,
      input2: '',
      inputlist: [],
      datalist: [],
      urlList: ['crossborder', 'women', 'men', 'cosmetics', 'lifestyle', 'kids']
    }
  },
  methods: {
    handClick (id, ind) {
      // console.log(ind)
      var aa = this.urlList[ind]
      this.$router.push(`/soli/${aa}`)
    },
    handindexClick () {
      // console.log('1111')
      this.$router.push(`/index`)
    },

    inputClick () {
      axios({
        url: 'http://www.mei.com/appapi/search/searchSuggest/v3?text=Z',
        method: 'get'
      }).then(res => {
        // console.log(res.data)
        this.inputlist = res.data.result.map(item => item.name).filter(item => item.includes(this.input2))
        // console.log(this.inputlist)
      })
    },
    handleScroll () {
      if (this.$refs.tarbar.clientHeight >= document.documentElement.scrollTop) {
        // console.log(1)
        this.isFiexd = false
      } else {
        // console.log(2)
        this.isFiexd = true
      }
    }

  },
  mounted () {
    axios.get('http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1577103146663&summary=3a848c1bd2227255e7b1b750f116fc26').then(res => {
      // console.log(res.data)
      this.datalist = res.data.lists
    })
    window.onscroll = this.handleScroll
  }

}

</script>
<style lang="scss" scoped>
  .demo-input-suffix {
    font-size: 0.14rem;
    display: flex;
    input{
      flex: 1;
    }span{
      flex: 1;
      display: inline-block;
      width: 1rem;
      margin-top: 0.1rem;
      margin-left:0.2rem;
    }i{
      width: 1rem;
      font-size: 0.3rem;
      margin-left: 0.25rem;
    }
  }
  .all{
    background: #7e593c;
    position: relative;
    height: 0.6rem;
    width: 100%;

  }
  ul{
    font-size: 0.14rem;
    display: flex;
    list-style: none;
    li{
      flex: 1;
      color: #fff;
    }
  }
  .fixed{
    position: fixed;
    top:0px;
    left:0px;
    background:black;
    height: 0.8rem;
    // line-height: 40px;
    width:100%;
  }
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
