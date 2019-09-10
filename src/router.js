import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import store from './store/index';

Vue.use(Router);

// set title
function setTitle(title, next) {
  document.title = title;
  next();
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login'
      },
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      beforeEnter: (to, from, next) => {
        setTitle(to.meta.title, next);
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      },
      beforeEnter: (to, from, next) => {
        if (!store.state.CheckProfile.isAuthenticated) {
          next('login');
        } else {
          setTitle(to.meta.title, next);
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About'
      },
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      beforeEnter: (to, from, next) => {
        if (!store.state.CheckProfile.isAuthenticated) {
          next('login');
        } else {
          setTitle(to.meta.title, next);
        }
      }
    }
  ]
});

export default router;
