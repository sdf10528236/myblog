/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Learn from '../views/Learn.vue'
import Project from '../views/Project.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'
import Resource from '../views/Resource.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/learn',
    component: Learn
  },
  {
    path: '/resource',
    component: Resource
  },
  {
    path: '/project',
    component: Project
  },
  {
    path: '/experience',
    component: Experience
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '*',
    redirect:'/home'
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
