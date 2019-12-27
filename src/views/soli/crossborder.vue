<template>
 <div>
    <div v-for="data in datalist" :key="data.id" class="all">
      <a :href="data.link_url">
        <img :src="data.main_image" />
      </a>
      <div class="zi">
        <strong>{{ data.main_title }}</strong>
        <span>{{ data.sub_title }}</span>
        <p>{{ data.description }}</p>
      </div>
    </div>
    <child :list="list"></child>
    <foot></foot>
  </div>
</template>
<script>
import Axios from 'axios'
import child from './child'
import foot from './foot'
export default {
  data () {
    return {
      datalist: [],
      list: 'crossborder'
    }
  },
  mounted () {
    Axios.get(
      'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5'
    ).then(res => {
      this.datalist = res.data.banners
    })
  },
  components: {
    child, foot
  }
}
</script>
<style lang="scss" scoped>
.all{
  position: relative;
}
img {
  width: 100%;
}
a {
  display: block;
}
div.zi {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin:3rem auto;
  color: #fff;
  font-size: 0.15rem;
  text-align: center;
  strong {
    display: block;
    font-size: 0.3rem;
  }
  span {
    display: block;
  }
}
</style>
