<template>
  <div class="allnew">
      <div class="left" v-for="data in newdatalist" :key="data.id">
          <h3 class="new">{{data.main_title}}</h3>
          <p class="time">{{data.sub_title}}</p>
          <img src="https://cdn13.mei.com/product/FD0-2775-173919/b97aa08d8a51d285870732bb6c8df6d582d20416acd7a9f8dfdb9e6b842e7d4c.jpg@300w_400h_2e_75q">
            <p>精选新品</p>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      newdatalist: []
    }
  },
  mounted () {
    axios({
      url: 'http://www.meihigo.hk/appapi/ninenew/operational/v1?credential='
    }).then(res => {
      console.log(res.data.show2)
      this.newdatalist = res.data.show2
    })
  }

}
</script>

<style lang="scss" scoped>
.allnew{
    height: 1.6rem;
    width: 100%;
    margin-left: 0.2rem;
    padding: 0 0.15rem;
    margin-top: 0.4rem;

}
.left{
    width: 1.31rem;
    height: 1.6rem;
    float: left;
   img{
       height: 0.6rem;
       width: 0.6rem;
       margin-left: 0.04rem;

   }
   .time{
       font-size: 0.1rem;
       display: inline-block;
       margin-top: 0.1rem;
   }
   h3{
     margin-left: 0.07rem;
   }

   p{
       border:1px solid red;
       text-align: center;
       margin-left: 0.08rem;
       margin-top: 0.1rem;
       font-size: 0.1rem;
        width: 0.6rem;
   }

}

</style>
