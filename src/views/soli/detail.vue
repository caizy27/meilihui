<template>
  <div>
     <ul
      v-infinite-scroll="myLoadMore"
      infinite-scroll-distance="100"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="data in datalist"  :key="data.eventId" @click="handleClick(data.eventId)">
        <img :src="data.imageUrl"/>
        <p>{{data.productName}}</p>
        <p>{{data.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      list: '',
      datalist: [],
      loading: false,
      current: 1,
      total: 0
    }
  },
  mounted () {
    this.list = this.$route.params.myid
    Axios({
      url: `http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.list}&key=&sort=&timestamp=1577357713696&summary=d3079eaf367bdb4c28db1cb989297575&platform_code=H5`

    }).then(res => {
      console.log(res.data.products)
      this.datalist = res.data.products
      this.pages = Number(res.data.totalPages)
    })
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
    handleClick (eventId) {
      // console.log(this.$router) // 路由对象
      // 编程式导航
    //  this.$router.push(`/detail/${id}`) // /detail/1111 /detail/2222

      this.$router.push({ name: 'MyDetail', params: { myid: eventId } })

      console.log(eventId)
    }
  }
}
</script>
<style lang="scss" scoped>
  li{
      float: left;
      width: 1.8rem;
    overflow: hidden;
    font-size: 0.14rem;
    img{
      float: left;
      width: 1rem;
      font-size: 0.14rem;
    }
  }
</style>
