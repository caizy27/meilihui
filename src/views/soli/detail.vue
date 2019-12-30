<template>
  <div>
    <detailheader></detailheader>

     <ul
      v-infinite-scroll="myLoadMore"
      infinite-scroll-distance="100"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="data in datalist"  class="xq" :key="data.eventId" @click="handleClick(data.productId)">
        <img :src="data.imageUrl"/>
        <p>{{data.brandName}}</p>
        <!-- <p>{{tag}}</p> -->
        <p>{{data.productName}}</p>
        <p class="mm">￥：{{data.price}}</p>

      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
import detailheader from '@/components/detailheader'
export default {
  data () {
    return {
      tag: '',
      datalist: [],
      loading: false,
      current: 1,
      total: 0
    }
  },
  mounted () {
    this.list = this.$route.params.myid
    this.$store.state.topisShow = false
    Axios({
      url: `http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.list}&key=&sort=&timestamp=1577357713696&summary=d3079eaf367bdb4c28db1cb989297575&platform_code=H5`

    }).then(res => {
      console.log(res.data.products)
      // console.log(res.data.products['0'].tagListDto['0'].tag,'202020')
      // this.tag=res.data.products['0'].tagListDto['0']?res.data.products['0'].tagListDto['0'].tag:''
      this.datalist = res.data.products
      console.log(this.datalist, 2121)
      this.pages = Number(res.data.totalPages)
    })
  },
  components: {
    detailheader

  },
  destroyed () {
    this.$store.state.topisShow = true
  },
  methods: {
    myLoadMore () {
      console.log('到底了')
      // 发请求 要新的数据， 跟之前的数组合并
      this.current++
      this.loading = true
      if (this.current > this.pages) {
        return
      }
      Axios({
        url: `http://www.mei.com/appapi/event/product/v3?pageIndex=${this.current}&categoryId=${this.list}&key=&sort=&timestamp=1577357713696&summary=d3079eaf367bdb4c28db1cb989297575&platform_code=H5`
      }).then(res => {
        console.log(res.data)
        this.datalist = [...this.datalist, ...res.data.products]
        this.loading = false
      })
    },
    handleClick (id) {
      // console.log(this.$router) // 路由对象
      // 编程式导航
    //  this.$router.push(`/detail/${id}`) // /detail/1111 /detail/2222

      this.$router.push({ name: 'Pages', params: { childid: id } })
      // this.$router.push({path: `/detail/${id}`, name:'ChildDetail'})
      console.log(id)
    }
  }

}
</script>
<style lang="scss" scoped>
.xq{
  width: 1.65rem;
  height: 3rem;
  float: left;
    font-size: 0.14rem;
    margin-left: 0.2rem;
    list-style: none;
    p{
   display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow:ellipsis;
    }
    .mm{
      color: red;
    }
    img{
      float: left;
      width: 1.65rem;
      height: 2.25rem;
      font-size: 0.14rem;
    }
  }

</style>
