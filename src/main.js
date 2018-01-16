// import Vue from 'vue'
// import App1 from './App'
// import VueRouter from 'vue-router'
// import Apple from './components/apple'
// import Banana from './components/banana'
// import RedApple from './components/redapple'
// Vue.use(VueRouter)
// let router = new VueRouter({
//     mode: 'history',
//     routes: [
//         {
//           path: '/',
//           redirect : '/apple'
//         },
//         {
//           path: '/apple',
//           component: Apple,
//           children : [
//               {
//                 path: 'redapple',
//                 component :RedApple
//               }
//           ]

//         },
//         {
//           path: '/banana',
//           component:Banana
//         }
//     ]
// })
// new Vue({
//   el: '#app',
//   router,
//   template: '<App1/>',
//   components: { App1 }
// })
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          component: IndexPage
        }
    ]
})
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
