import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  state: {
    categories: [ 'Chicken', 'Beef', 'Veggies', 'Pasta' ],
    selectedCategories: [],
    recipies: [
      {
        id: 1,
        title: 'Test Recipe Card 1',
        description: 'Test recipe description',
        category: 'Chicken',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 2,
        title: 'Test Recipe Card 2',
        description: 'Test recipe description',
        category: 'Beef',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 3,
        title: 'Test Recipe Card 3',
        description: 'Test recipe description',
        category: 'Veggies',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 4,
        title: 'Test Recipe Card 4',
        description: 'Test recipe description',
        category: 'Pasta',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 1,
        title: 'Test Recipe Card 1',
        description: 'Test recipe description',
        category: 'Chicken',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 2,
        title: 'Test Recipe Card 2',
        description: 'Test recipe description',
        category: 'Beef',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 3,
        title: 'Test Recipe Card 3',
        description: 'Test recipe description',
        category: 'Veggies',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 4,
        title: 'Test Recipe Card 4',
        description: 'Test recipe description',
        category: 'Pasta',
        image: '/static/food/dish1.jpg'
      }
    ]
  },
  actions,
  getters,
  mutations,
  strict: debug
})
