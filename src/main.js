import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router  = new VueRouter()

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
