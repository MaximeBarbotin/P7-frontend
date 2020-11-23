import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '../components/RegisterPage.vue'
import LoginPage from '../components/LoginPage.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
     {
    path: '/register',
    component: RegisterPage
  }, {
    path: '/login',
    component: LoginPage
  }
  ]
});

export default router
