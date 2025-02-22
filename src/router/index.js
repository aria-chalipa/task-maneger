import { createRouter, createWebHistory } from 'vue-router'
import homeTemp from '@/views/homeTemp.vue'
import tasksTemp from '@/views/tasksTemp.vue'
import productsTemp from '@/views/productsTemp.vue'



const routes = [
{path:'/' , name:'homeTemp',component:homeTemp},

{path:'/tasks' , name:'tasksTemp',component:tasksTemp},

{path:'/products' , name:'productsTemp',component:productsTemp},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
