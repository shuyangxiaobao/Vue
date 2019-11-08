import 'babel-polyfill';
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Geqiangbao from '@/components/geqiangbao'
import Root from '@/components/Root'
import Home from '@/components/APEX/Home'
import Data from '@/components/APEX/Data'
import NewsDetail from '@/components/APEX/newsDetail'
import News from '@/components/APEX/News'
import Products from '@/components/APEX/Products'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/22',
      name: 'Root',
      component: Root
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gqb',
      name: 'GQB',
      component: Geqiangbao
    },
    {
      path: '/',
      name: 'APEXHome',
      component: Home
    },
    {
      path: '/data',
      name: 'APEXData',
      component: Data
    },
    {
      path: '/news',
      name: 'APEXNews',
      component: News
    },
    {
      path: '/NewsDetail',
      name: 'newsDetail',
      component: NewsDetail
    },
    {  
      path: '/Products',
      name: 'APEXProducts',
      component: Products
    }
  ]
})
