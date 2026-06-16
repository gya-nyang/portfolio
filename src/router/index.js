import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import PracticeView from '@/views/PracticeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/works',
    name: 'works',
    component: WorkView
  },
  {
    path: '/practice',
    name: 'practice',
    component: PracticeView
  }
]


const router = createRouter({
  history: createWebHistory(), // localhost:5173/about 형태로 깔끔하게 작동
  routes,
  // 💡 페이지 이동하거나 메뉴 누를 때 화면이 맨 위로 부드럽게 스크롤되게 하는 옵션
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router