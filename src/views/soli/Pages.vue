<template>
    <div>
        <div>

        </div>

        <img :src="list[2].bigImgUrl"/>
        <p>{{filmInfo.name}}</p>
        <p>{{filmInfo.brand_story}}</p>

    </div>
</template>

<script>
import Axios from 'axios'

export default {
  data () {
    return {
      filmInfo: [],
      list: []
    }
  },
  mounted () {
    Axios({
      url: 'http://www.mei.com/appapi/product/detail/v3?categoryId=2041204190000007498&productId=2121212199000176930&platform_code=H5&timestamp=1577242810485&summary=dd33ddb48a74cc868d1e712eb155b8d7'

    }).then(res => {
      this.filmInfo = res.data.infos
      this.list = res.data.infos.description.product_img1
      console.log(res.data.infos)
      console.log(res.data.infos.description.product_img1[1])
    })
  }

}

</script>
<style lang="scss" scoped>
    img{
      width: 100%;
      height: 200px;
    }
</style>
