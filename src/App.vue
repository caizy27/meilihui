<template>
  <div>
    <tabber v-if="$store.state.isShow"></tabber>
     <router-view></router-view>
  </div>
</template>
<script>
import tabber from '@/components/tarbar'

export default {

  components: {
    tabber
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none
}
</style>
