// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    console.log(this.$store)
  }
})
