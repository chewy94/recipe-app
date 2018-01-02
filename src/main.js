// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import Alert from '@/components/Shared/Alert'
import axios from 'axios'

import App from './App'
import router from './router'
import { store } from './store'

Vue.use(Vuetify, { theme: {
  primary: '#64b5f6',
  secondary: '#ce93d8',
  accent: '#ff5722',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component('alert', Alert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
  // created () {
  //   var config = {
  //     apiKey: 'AIzaSyDHgr4iO_rSQQtgplXqlBdG5hrQ72k09qM',
  //     authDomain: 'yummy-things.firebaseapp.com',
  //     databaseURL: 'https://yummy-things.firebaseio.com',
  //     projectId: 'yummy-things',
  //     storageBucket: 'yummy-things.appspot.com',
  //     messagingSenderId: '153314814395'
  //   }
  //   firebase.initializeApp(config)
  // }
})
