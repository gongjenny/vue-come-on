import Vue from 'vue'
import App1 from './App'
import VueRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/apple/:color',
          component: Apple
        },
        {
          path: '/banana',
          component:Banana
        }
    ]
}) 

new Vue({
  el: '#app',
  router,
  template: '<App1/>',
  components: { App1 }
})
