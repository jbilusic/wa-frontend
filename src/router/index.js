import { createRouter, createWebHistory } from 'vue-router'
import PageViewer from '../components/PageViewer.vue'
import Article from '../components/Article.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    { path: '/', component:PageViewer},
     /*  component: () => import('../views/AboutView.vue') */
     { path: '/:articleName', component:Article}
  ]
})

export default router
