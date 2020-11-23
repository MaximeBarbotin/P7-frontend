import Vue from 'vue'
//import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

//const routes = [
//  { path: '/register', component: RegisterPage },
 // { path: '/login', component: LoginPage }
//]



Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
