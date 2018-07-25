import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Bird from '@/components/bird'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/bird',
      name: 'bird',
      component: Bird
    },
  ]
})
