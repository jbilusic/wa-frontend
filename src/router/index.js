import { createRouter, createWebHistory } from 'vue-router'
import PageViewer from '../components/PageViewer.vue'
import Article from '../components/Article.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ArticleMaker from '../components/ArticleMaker.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    { path: '/', component:PageViewer},
     /*  component: () => import('../views/AboutView.vue') */
     { path: '/article/:articleName', component:Article},
     { path: '/articleMaker', component:ArticleMaker},
     { path: '/login', component:Login},
     { path: '/register', component:Register}
  ]
})

export default router
