<template>
  <div class="big">
    <div class="chengzai">
      <a @click="backClick">×</a>
      <h1>注册/登录<br/>
        <span>注册即送2600元新人大礼包</span>
      </h1>
      <form action="post">
        <input type="text" value="手机号" class="text">
        <input type="button" value="→" class="zuo">
      </form>
      <div class="qie"><a href="#" @click="handleClick">切换账号密码登录</a></div>
    </div>  <!-- <div><a href="">×</a></div>
      <h1>注册/登录<br/>
        <span>注册即送2600元新人大礼包</span>
      </h1>
      <form action="post">
        <input type="text">
        <input type="button" value="→" class="zuo">
    </form>-->
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$store.state.topisShow = false
  },
  destroyed () {
    this.$store.state.topisShow = true
  },
  methods: {
    handleClick () {
      console.log(1111)
      // console.log(this.$router) // 路由对象
      // 编程式导航
      // this.$router.push(`/detail/${id}`) // /detail/1111 /detail/2222

      this.$router.push(`/logintwo`)
    },
    backClick () {
      this.$router.push(`index`)
    }
  }

}

</script>
<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
.big{
  position: relative;
  height: 100%;
  width: 100%;
}
.chengzai{
  height: 2.66rem;
  widows: 3.75rem;
  margin-top: 0.8rem;
}
  a {
    height: 0.6rem;
    width: 0.6rem;
    font-size: 0.4rem;
    text-align: center;
    height: 0.6rem;
    display: block;
    float: right;
    text-decoration: none;
    position: absolute;
    right: 0;
    top: -0.8rem;
  }
  input{
    height: 0.5rem;
    width: 2rem;
    border: none;
    display: flex;

  }
  h1{
    padding-left: 0.35rem;
    padding-bottom: 0.35rem;
    color: #000;
    font-size: 0.24rem;
    position: absolute;
    height: 0.8rem;
    width: 3.75rem；

  }
  span{
      font-size: 0.16rem;
    }
  form{
    height: 2rem;
    width: 3rem;
    position: absolute;
    top: 1rem;
    left: 0.3rem;
  }
  .text{
    border: 1px solid black;
    height: 0.6rem;
    width: 3rem;
    margin-bottom: 0.15rem;
    display: flex;
  }
  .zuo{
    font-size: 0.3rem;
    color: white;
    margin-bottom: 0.15rem;
    height: 0.6rem;
    width: 3rem;
    margin: 0 auto;
    text-align: center;
    background: #ccc;
    padding-left: 1.3rem;
    line-height: 0.6rem;
  }
  .qie a{
    display: inline-block;
    color: #666;
    font-size: 0.12rem;
    position: absolute;
    right: 2.3rem;
    top: 2.4rem;
    width: 1rem;
  }
</style>
