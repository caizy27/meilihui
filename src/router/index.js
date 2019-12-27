import Vue from 'vue'
import VueRouter from 'vue-router'
import Soli from '@/views/soli'
import Crossborder from '@/views/soli/crossborder'

import Women from '@/views/soli/women'
import Men from '@/views/soli/men'
import Cosmetics from '@/views/soli/cosmetics'
import Lifestyle from '@/views/soli/lifestyle'
import index from '@/views/index'
import kids from '@/views/soli/kids'
import Detail1 from '@/views/soli/detail'

Vue.use(VueRouter) // 注册路由插件

const routes = [
  {
    path: '/soli',
    component: Soli,
    children: [

      {
        path: 'crossborder',
        name: 'crossborder',
        component: Crossborder
      },
      {
        path: 'women',
        name: 'women',
        component: Women
      },
      {
        path: 'men',
        name: 'men',
        component: Men
      },
      {
        path: 'cosmetics',
        name: 'cosmetics',
        component: Cosmetics
      },
      {
        path: 'lifestyle',
        name: 'lifestyle',
        component: Lifestyle
      },
      {
        path: 'kids',
        name: 'kids',
        component: kids

      }
    ]
  },
  {
    path: '/detail/:myid', // 动态路由
    component: Detail1,
    props: true,
    name: 'MyDetail' // 命名路由
  },
  {
    path: '/index',
    component: index

  },

  {
    path: '*',
    redirect: '/index'
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
