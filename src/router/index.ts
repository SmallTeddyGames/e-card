const router = createRouter({
  history: import.meta.env.VITE_DESKTOP
    ? createWebHashHistory()
    : createWebHistory('/e-card'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Game/Home.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/Others/404.vue')
    }
  ]
})

export default router
