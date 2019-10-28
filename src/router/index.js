import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Geqiangbao from '@/components/geqiangbao'
import Root from '@/components/Root'
import Home from '@/components/APEX/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/home',
      name: 'APEXHome',
      component: Home
    }
  ]
})
