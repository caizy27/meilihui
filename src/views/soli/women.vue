<template>
  <div>
    <img src="https://img.alicdn.com/tfs/TB1WQ91o4z1gK0jSZSgXXavwpXa-750-900.jpg">
      <child :list="list"></child>

  </div>
</template>
<script>
import child from './child'

export default {
  data () {
    return {
      datalist: [],
      list: 'women'
    }
  },
  components: {
    child
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
   margin-top: 0.2rem;
}

</style>
