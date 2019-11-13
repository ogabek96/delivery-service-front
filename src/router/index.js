import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export const router = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/owner',
    name: 'User',
    component: () => import('@/views/user/owner/index')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/user/admin/index')
  },
  {
    path: '/orders',
    name: 'OrdersList',
    component: () => import('@/views/orders/index')
  },
  {
    path: '/orders/create',
    name: 'CreateOrder',
    component: () => import('@/views/orders/create')
  },
  {
    path: '/orders/available',
    name: 'AvailableOrders',
    component: () => import('@/views/orders/available')
  },
  {
    path: '/orders/processing',
    name: 'ProcessingOrder',
    component: () => import('@/views/orders/processing')
  }
]

export default new VueRouter({
  routes: router
});