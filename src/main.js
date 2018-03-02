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
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          component: IndexPage
        },
        {
          path: '/detail',
          component: DetailPage,
          redirect: '/detail/analysis',
          children:[
              {   
                  path: 'analysis',
                  component: DetailAnaPage
              },
              {   
                path: 'count',
                component:DetailCouPage
              },
              {   
                path: 'forecast',
                component:DetailForPage
              },
              {   
                path: 'publish',
                component:DetailPubPage
              }
          ]
        }
    ]
})
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
