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
      list: 'men'
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
strong {
  color: #fff;
  position: relative;
  bottom: 1.6rem;
  left: 1.25rem;
  font-size: 0.25rem;
}
span {
  color: #fff;
  position: relative;
  bottom: 1.4rem;
  left: 0rem;
  font-size: 0.15rem;
}
p {
  color: #fff;
  position: relative;
  bottom: 1.45rem;
  left: 1.5rem;
  font-size: 0.15rem;
}
</style>
