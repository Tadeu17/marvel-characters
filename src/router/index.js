import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'character-list',
    component: () => import('../views/character/List.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/character/:id',
    name: 'character-details',
    component: () => import('../views/character/Details.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
