// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/auth',
        name: 'Auth',
        component: () => import(/* webpackChunkName: "home" */ '@/views/auth/Index.vue'),
      },
    ],
  },
  {
    path: '/map',
    component: () => import('@/layouts/map/Default.vue'),
    children: [
      {
        path: '',
        name: 'Map',
        component: () => import(/* webpackChunkName: "home" */ '@/views/map/Index.vue'),
      },
    ],
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/app/'),
  routes,
})


router.beforeEach((to, from) => {
  // explicitly return false to cancel the navigation
  console.log(`Nos vamos de ${from.name} a ${to.name}`);
  return true
})

export default router
