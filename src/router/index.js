import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import PostsPage from '../views/PostsPage.vue';
import ProfilePage from '../views/ProfilePage.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: PostsPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/profile', component: ProfilePage },
    
  ]
});

export default router;





