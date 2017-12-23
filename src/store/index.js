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
        smallDescription: 'Test recipe description',
        description: `This is going to be a really long description of the overall dish.\n\nIt will initially allow for new lines and we will eventually need a WYSIWYG editor and some html cleansing\n\nHopefully it does not end up too bad`,
        category: 'Chicken',
        image: '/static/food/dish1.jpg',
        directions: [
          {
            step: '1',
            content: 'Here is where you will put what exactly happens for step 1 of the recipe.'
          },
          {
            step: '2',
            content: 'Not very good at content filler, but here is step 2!'
          },
          {
            step: '3',
            content: 'This is the third, and last, step of the recipe!!!'
          }
        ],
        ingredients: [
          {
            category: 'Meat',
            items: [
              {name: 'Chicken', quantity: '2 lbs'}
            ]
          },
          {
            category: 'Veggies',
            items: [
              { name: 'Green beans', quantity: '1 lbs' },
              { name: 'Baby carrots', quantity: '1 lbs' }
            ]
          },
          {
            category: 'Misc',
            items: [
              { name: 'Chicken broth', quantity: '32 oz' }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Test Recipe Card 2',
        smallDescription: 'Test recipe description',
        category: 'Beef',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 3,
        title: 'Test Recipe Card 3',
        smallDescription: 'Test recipe description',
        category: 'Veggies',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 4,
        title: 'Test Recipe Card 4',
        smallDescription: 'Test recipe description',
        category: 'Pasta',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 5,
        title: 'Test Recipe Card 5',
        smallDescription: 'Test recipe description',
        category: 'Chicken',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 6,
        title: 'Test Recipe Card 6',
        smallDescription: 'Test recipe description',
        category: 'Beef',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 7,
        title: 'Test Recipe Card 7',
        smallDescription: 'Test recipe description',
        category: 'Veggies',
        image: '/static/food/dish1.jpg'
      },
      {
        id: 8,
        title: 'Test Recipe Card 8',
        smallDescription: 'Test recipe description',
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
