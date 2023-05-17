import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Question1View from '../views/Question1View.vue'
import Question2View from '../views/Question2View.vue'
import Question3View from '../views/Question3View.vue'
import Question4View from '../views/Question4View.vue'
import Question5View from '../views/Question5View.vue'
import Award from '../views/Award.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Question1View',
      name: 'Question1View',
      component: Question1View
    },
    {
      path: '/Question2View',
      name: 'Question2View',
      component: Question2View
    },
    {
      path: '/Question3View',
      name: 'Question3View',
      component: Question3View
    },
    {
      path: '/Question4View',
      name: 'Question4View',
      component: Question4View
    },
    {
      path: '/Question5View',
      name: 'Question5View',
      component: Question5View
    },
    {
      path: '/Award',
      name: 'Award',
      component: Award
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
