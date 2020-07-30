import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'
import Login from '../views/Login.vue'
import Edit from '../views/Edit.vue'
// import { store } from "@/store"

Vue.use(VueRouter)

  const routes =
  [
    {
    path: '*',
    name: '404',
    component: Page404,
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Work.vue')
    }
  ]


const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
