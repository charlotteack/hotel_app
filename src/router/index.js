import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Login = () => import('views/login/Login')
const ForgetPwd = () => import('views/forgetpwd/ForgetPwd')
const Reg = () => import('views/register/Reg')
const Home = () => import('views/home/Home')
const HotelDetail = () => import('views/hoteldetail/HotelDetail')
const Order = () => import('views/order/Order')
const ALLOrder = () => import('views/allorder/AllOrder')
const Life = () => import('views/life/Life')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const UpdateProfile = () => import('views/updateprofile/UpdateProfile')

  const routes = [
    {
      path: '/',
      name: 'Home',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/forget',
      component: ForgetPwd
    },
    {
      path: '/reg',
      component: Reg
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/detail',
      component: HotelDetail
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/allorder',
      component: ALLOrder
    },
    {
      path: '/life',
      component: Life
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/updateprofile',
      component: UpdateProfile
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
