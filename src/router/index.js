import { createRouter, createWebHistory } from 'vue-router'
import homeTemp from '@/views/homeTemp.vue'
import tasksTemp from '@/views/tasksTemp.vue'
import productsTemp from '@/views/productsTemp.vue'
import SingleProductView from '@/views/products/SingleProductView.vue'
import ProductView from '@/views/products/ProductView.vue'
import EditProductView from '@/views/products/EditProductView.vue'




const routes = [
{path:'/' , name:'homeTemp',component:homeTemp},

{path:'/tasks' , name:'tasksTemp',component:tasksTemp},

{path:'/products' , name:'productsTemp',component:productsTemp , children:[
  {path:'' , name:'product',component:ProductView},
  {path:'/products/:id' , name:'singleProduct' , component:SingleProductView ,children:[
    {path:'/products/:id/edit ' , name:'editProduct' , component:EditProductView},
  ]},
  
]},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
