import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Male from "../pages/male.vue"
import Female from "../pages/female.vue"
import Home from "../pages/home.vue"



const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/male', name: 'male', component: Male },
  { path: '/female', name: 'female', component: Female },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;