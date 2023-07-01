import Vue from 'vue'
import App from './App.vue'

// Router Components
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false



new Vue({
  el:'#app',
  render: h => h(App),
  router:router
}).$mount('#app')
