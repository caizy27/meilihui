<template>
  <div>
    <!-- <ul
      v-infinite-scroll="myLoadMore"
      infinite-scroll-distance="500"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
    > -->
      <div
        v-for="data in datalist"
        :key="data.eventId"
        class="one"
        @click="handleClick(data.eventId)"
      >
        <img :src="data.imageUrl" />

        <div class="down">
          <span style="background:#fff;color:black">{{
            `${data.siloCategory}直发`
          }}</span>
          <div>
            <span>{{ data.englishName }}</span>
          </div>
          <div>
            <span>{{ data.chineseName }}</span>
          </div>
          <div>
             <span>{{ data.discountText }}</span>
          </div>
          </div>
      </div>
    <!-- </ul> -->
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1,
      pages: null
    }
  },
  mounted () {
    // console.log(this.childaddress1)
    Axios.get(
      'http://www.meihigo.hk/appapi/home/eventForH5?params=%7B%7D&timestamp=1577329032828&summary=7dc5da1c1c11f876cba2e8dce51e762d&platform_code=H5'
    ).then(res => {
      this.datalist = res.data.lists[1].events
    //  console.log(res.data.lists[1].events, 1111111111)
      // this.pages = Number(res.data.totalPages)
    })
  },
  methods: {
    // myLoadMore () {
    //   this.current++
    //   this.loading = true
    //   // console.log(this.pages,99999999)
    //   if (this.current > this.pages) {
    //     return
    //   }
    //   // console.log(this.current,77777777777)
    //   Axios.get(
    //     `http://www.mei.com/appapi/silo/eventForH5?categoryId=${this.list}&pageIndex=${this.current}&timestamp=1577256744540&summary=21cf9cdd3c141a41ae0f5c496a353ed3&                             platform_code=H5`
    //   ).then(res => {
    //     // console.log(res,88888888888888)
    //     this.datalist = [...this.datalist, ...res.data.eventList]
    //     this.loading = false
    //   })
    //   // console.log(this.childaddress2)
    // },
    handleClick (id) {
      this.$router.push({ name: 'MyDetail', params: { myid: id } })
    }
  },

  props: ['list']
}
</script>
<style lang="scss" scoped>
img {
  width: 96%;
  margin-left: 0.1rem;
  margin-bottom: 0.02rem;
  margin-top: 0.1rem;
}
.one {
  position: relative;
  font-size: 0.14rem;
  .down {
    position: absolute;
    bottom: 0.1rem;
    left: 0.1rem;
     font-size: 0.14rem;
     margin-left: 0.1rem;
    margin-bottom: 0.1rem;
    div {
      color: #fff;
    }
  }
}
</style>
