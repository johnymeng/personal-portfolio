import Vue from 'vue'
import App from './App.vue'

// Router Components
import VueRouter from 'vue-router'
import Routes from './routes'

// NavBar Imports
// import { createApp } from 'vue';
// import VueNavigationBar from 'vue-navigation-bar';
// import 'vue-navigation-bar/dist/vue-navigation-bar.css';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

// NavBar Components
// const app = createApp(App);
// app.component('vue-navigation-bar', VueNavigationBar);


Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router:router
}).$mount('#app')
