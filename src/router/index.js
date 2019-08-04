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
    { path: '*', name: 'four', component: Four }
  ]
})

export default router
