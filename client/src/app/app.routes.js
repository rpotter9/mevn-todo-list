import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

import { tasksRoutes } from './modules/tasks'

Vue.use(VueRouter)

const appRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    title: 'MEVN Todo List'
  }
]

const routes = [
    ...appRoutes,
    ...tasksRoutes
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
