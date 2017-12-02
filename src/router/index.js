import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
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
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe
    }
  ]
})
