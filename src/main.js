import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ---------引入element-----------
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// ---------引入mint-UI-----------
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
