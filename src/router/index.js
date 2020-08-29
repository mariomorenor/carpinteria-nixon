import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:{ name:'products'}
    },
    {
      path:'/productos',
      name:'products' ,
      components: require('../views/Products.vue')
    },
    {
      path:'/detalles_producto',
      name:'product_show',
      props:true,
      components: require('../views/ProductDetails.vue')
    },
   
  ]


const router = new VueRouter({
  routes,
})

export default router
