<template>
  <div class="big">
    <div class="chengzai">
      <a @click="backClick">×</a>
      <h1>
        注册/登录
        <br />
        <span>注册即送2600元新人大礼包</span>
      </h1>
      <form action="post">
        <input type="text" value="账号" class="text" />
        <input type="text" value="密码" class="text" />
        <input type="button" value="→" class="zuo" />
      </form>
      <div class="qie">
        <a @click="handleClick">切换手机号验证</a>
      </div>
    </div>
    <!-- <div><a href="">×</a></div>
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
  // data () {
  //   return{

  //   }
  // },
  mounted () {
    this.$store.state.topisShow = false
  },
  destroyed () {
    this.$store.state.topisShow = true
  },
  methods: {
    handleClick () {
      // console.log(1111)
      // console.log(this.$router) // 路由对象
      // 编程式导航
      // this.$router.push(`/detail/${id}`) // /detail/1111 /detail/2222

      this.$router.push(`/login`)
    },
    backClick () {
      this.$router.push(`index`)
    }
  }

}

</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.big {
  position: relative;
  height: 100%;
  width: 100%;
}
.chengzai {
  height: 266px;
  widows: 375px;
  margin-top: 80px;
}
a {
  height: 60px;
  width: 60px;
  font-size: 40px;
  text-align: center;
  height: 60px;
  display: block;
  float: right;
  text-decoration: none;
  position: absolute;
  right: 0;
  top: -80px;
}
input {
  height: 50px;
  width: 200px;
  border: none;
  display: flex;
}
h1 {
  padding-left: 35px;
  padding-bottom: 35px;
  color: #000;
  font-size: 24px;
  position: absolute;
  height: 80px;
  width: 375px；;
}
span {
  font-size: 16px;
}
form {
  height: 200px;
  width: 300px;
  position: absolute;
  top: 100px;
  left: 30px;
}
.text {
  border: 1px solid black;
  height: 60px;
  width: 300px;
  margin-bottom: 15px;
  display: flex;
}
.zuo {
  margin: 20px;
  font-size: 30px;
  color: white;
  margin-bottom: 15px;
  height: 60px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  background: #ccc;
  padding-left: 130px;
  line-height: 60px;
}
.qie a {
  display: inline-block;
  color: #666;
  font-size: 12px;
  position: absolute;
  right: 235px;
  top: 320px;
  width: 100px;
}
</style>
