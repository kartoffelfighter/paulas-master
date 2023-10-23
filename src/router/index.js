import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisplayOne from '../views/DisplayOne.vue'
import DisplayTwo from '../views/DisplayTwo.vue'
import DisplayThree from '../views/DisplayThree.vue'
import DisplayFour from '../views/DisplayFour.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/1',
      name: 'One',
      component: DisplayOne
    },
    {
      path: '/2',
      name: '2',
      component: DisplayTwo
    },
    {
      path: '/3',
      name: '3',
      component: DisplayThree
    },
    {
      path: '/4',
      name: '4',
      component: DisplayFour
    } /** ,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
