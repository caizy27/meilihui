<template>
  <div>
    <img src="https://img.alicdn.com/tfs/TB1WQ91o4z1gK0jSZSgXXavwpXa-750-900.jpg">
      <child :list="list"></child>
      <foot></foot>
  </div>
</template>
<script>
import child from './child'
import foot from './foot'
export default {
  data () {
    return {
      datalist: [],
      list: 'women'
    }
  },
  components: {
    child, foot
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}

</style>
