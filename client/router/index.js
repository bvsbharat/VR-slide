import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Hashtag from '../views/Hashtag'
import Timeline from '../views/Timeline'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [    
    {
      name: 'hashtag',
      path: '/hashtag',
      component: Hashtag
    },
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard
    },
    {
      name: 'timeline',
      path: '/timeline',
      component: Timeline
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
