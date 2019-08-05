// 定义router对象。导出给main.js使用
import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import Image from '@/views/image/image.vue'
import Comment from '@/views/comment/comment.vue'
import Fans from '@/views/fans/fans.vue'
import Publish from '@/views/publish/publish.vue'
import Setting from '@/views/setting/setting.vue'
import Four from '@/views/404/four.vue'

import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      // name: 'home',
      component: Home,
      redirect: '/login',
      children: [
        { path: '/welcome', name: 'welcome', component: Welcome },
        { path: '/article', name: 'article', component: Article },
        { path: '/image', name: 'image', component: Image },
        { path: '/comment', name: 'comment', component: Comment },
        { path: '/fans', name: 'fans', component: Fans },
        { path: '/publish', name: 'publish', component: Publish },
        { path: '/setting', name: 'setting', component: Setting }
      ]
    },
    // 处理404
    { path: '*', name: 'four', component: Four }
  ]
})

// 前置导航守卫
router.beforeEach((to, from, next) => {
  // // 判断是不是登录路由哦
  // if (to.path === '/login') return next()
  // // 判断是否登录
  // if (!store.gitUser().token) return next('/login')
  // // 放行
  // next()

  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})

export default router
