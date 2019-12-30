import Vue from 'vue'
import VueRouter from 'vue-router'
import Soli from '@/views/soli'
import Crossborder from '@/views/soli/crossborder'
import Egister from '@/views/egister'
import Women from '@/views/soli/women'
import Men from '@/views/soli/men'
import Cosmetics from '@/views/soli/cosmetics'
import Lifestyle from '@/views/soli/lifestyle'
import index from '@/views/index'
import kids from '@/views/soli/kids'
import Detail1 from '@/views/soli/detail'
import Login from '@/views/login'
import LoginTwo from '@/views/logintwo'
import Pages from '@/views/soli/Pages'
import Search from '@/views/soli/search'

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

      },
      {
        path: 'Pages',
        name: 'Pages',
        component: Pages
      },
      {
        path: 'search',
        name: 'search',
        component: Search
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
    path: '/login',
    component: Login

  },
  {
    path: '/logintwo',
    component: LoginTwo

  },
  {
    path: '/index',
    component: index

  },
  {
    path: '/egister',
    name: 'egister',
    component: Egister
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
