import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Dashboard from "../components/Admin/Dashboard";
import Dashboard_view from "../components/Admin/Dashboard_view";
import CreateItem from "../components/Admin/CreateItem";
import CreateCategory from "../components/Admin/CreateCategory";
import Requests from "../components/Admin/Requests";
import EditUsers from "../components/Admin/EditUsers";
import fourofour from "../components/fourofour";
import singledetail from "../components/Admin/singledetail";
import Comment from '../components/Admin/Comment';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/dashboard/view',
    name: 'DashboardView',
    component: Dashboard_view,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/dashboard/create/item',
    name: 'DashboardCreateItem',
    component: CreateItem,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/dashboard/create/category',
    name: 'DashboardCreteCategory',
    component: CreateCategory,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/dashboard/requests',
    name: 'DashboardRequests',
    component: Requests,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/dashboard/editusers',
    name: 'DashboardEditUsers',
    component: EditUsers,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/dashboard/singledetail',
    name: 'SingleDetail',
    component: singledetail,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/dashboard/comment',
    name: 'Comment',
    component: Comment,
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('token') !== null) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '*',
    component:fourofour
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes
})



export default router
