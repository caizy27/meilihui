<template>
  <div>
      <div data-v-bde8a868="" class="search-keyword">
          <div data-v-bde8a868="">
              <div data-v-bde8a868="" class="search-keyword-box active">
                  <span data-v-bde8a868="" class="iconfont icon-fangdajing"></span>
                      <form data-v-bde8a868="" action="/search" method="get" class="input-search-form">
                        <input data-v-bde8a868="" id="searchKeyword" name="q" type="search" placeholder="BENATIVE 最低可至1折" autocomplete="off" class="keyword" v-model="mytext" @input="searchClick">
                      </form> <span data-v-bde8a868="" class="remove" style="display: none;">
                          </span>
            </div>
                        <div data-v-bde8a868="" class="cancel">
                    <a data-v-bde8a868="" @click="gosearchbackClick">取消</a>
                    </div>
             </div> <!---->
    </div>
    <div class="searchInput">
        <ul>
            <li v-for="data in datalist" :key="data.brandId" ></li>
        </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      mytext: '',
      datalist: []
    }
  },
  methods: {
    // searchClick(){
    //     axios({
    //         url:`http://www.mei.com/appapi/search/searchSuggest/v3?text=z`,
    //         methods:'get'
    //     }).then(res =>{
    //         console.log(res.data.result.name)
    //         this.datalist=res.data.result.name
    //     })

    // }

    gosearchbackClick () {
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
.search-keyword[data-v-bde8a868] {
    width: 100%;
    height: 0.373333rem;
    background-color: #fff;
    pointer-events: auto;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10002;}
.active[data-v-bde8a868] {
    width: 2.36rem;
    margin: .08rem auto .13rem .333333rem;
}
.search-keyword-box[data-v-bde8a868] {
    width: 2.386667rem;
    height: .353333rem;
    float: left;
    margin: .08rem auto;
    padding: 0 0 0 .45rem;
    background-color: #f5f5f5;
    position: relative;
}
.search-keyword-box span.iconfont[data-v-bde8a868] {
    width: .35rem;
    height: .323333rem;
    line-height: .313333rem;
    text-align: center;
    font-size: .166667rem;
    position: absolute;
    left: 0;
    top: 0;
}
.input-search-form[data-v-bde8a868] {
    display: inline-block;
    margin: 0;
    padding: 0;
}
.active .keyword[data-v-bde8a868] {
    width: 1.793333rem;
}

.keyword[data-v-bde8a868] {
    display: inline-block;
    vertical-align: top;
    width: 2.32rem;
    padding: 0 .126667rem 0 0;
    height: .323333rem;
    line-height: .323333rem;
    font-size: .116667rem;
    background-color: #f5f5f5;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
span.remove[data-v-bde8a868] {
    width: .313333rem;
    height: .313333rem;
    position: absolute;
    right: 0;
    top: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBT…sUzmUMxnLnZ4fGdXDMzwL1T+2+Mj45bdf7EHaj3ean/hX3g7AL7p28uQAAAABJRU5ErkJggg==) 50% no-repeat;
    background-size: .143333rem .143333rem;
}
span.remove, span.switch {
    display: block;
    height: 0.6rem;
    float: left;
    text-indent: -500em;
    position: absolute;
    top: 0;
    right: -.2rem;
}
.cancel[data-v-bde8a868] {
    width: 0.586667rem;
    height: 0.473333rem;
    float: left;
}
.cancel a[data-v-bde8a868] {
    display: block;
    line-height: 0.473333rem;
    text-align: center;
    color: #000;
    font-size: .116667rem;
}
a {
    text-decoration: none;
    color: #007aff;
}
a, input, select, textarea {
    outline: 0;
}
a {
    cursor: pointer;
}
</style>
