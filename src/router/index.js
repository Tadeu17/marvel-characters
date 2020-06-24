import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/character/:id',
    name: 'character',
    component: () => import('../views/CharacterDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
