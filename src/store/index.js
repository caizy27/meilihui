import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isShow: true,
    looplist: []
  },
  mutations: {
    getSwiperDataMutitions (state, payload) {
      state.looplist = payload
      // console.log(payload, '20021')
    }
  },
  actions: {
    // 异步请求数据
    getSwiperData (store) {
      // console.log(store, '15151')
      Axios({
        url: 'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5&credential=485461278f8fd06c1a62500d1b472cc88c9abaa87b75cae1e5fc707c0949cc5644a7abedc40524ce2afeb3b8cd49b23dd14d7e22f5d26b613340510783394c94479e6e357244ed8bcc58c965375b2e329f5afc5139359cb1eebe35b0a9f54598467532ad10fdb1d69cb1dc65030cdc352402a39f0308226906099a1eb371312c5148da2dac409343cab54c8e033aee58'

      }).then(res => {
        // console.log(res.data)
        store.commit('getSwiperDataMutitions', res.data.banners)
      })
    }
  },
  modules: {
  }
})
