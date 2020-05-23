import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Login = () => import('views/login/Login')
const Home = () => import('views/home/Home')
const Order = () => import('views/order/Order')
const Life = () => import('views/life/Life')
const Profile = () => import('views/profile/Profile')

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/life',
      component: Life
    },
    {
      path: '/profile',
      component: Profile
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
