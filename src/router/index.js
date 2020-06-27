import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DisplayCurriculum from '../views/DisplayCurriculum.vue'
import UpsertCurriculum from '../views/UpsertCurriculum.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/curriculum',
    name: 'display',
    component: DisplayCurriculum
  },
  {
    path: '/curriculum/upsert',
    name: 'upsert',
    component: UpsertCurriculum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
