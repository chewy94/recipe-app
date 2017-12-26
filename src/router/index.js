import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Users/Login/Login'
import Preferences from '@/components/Users/Preferences/Preferences'
import Recipe from '@/components/Recipe/Recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: Preferences
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe
    }
  ]
})
