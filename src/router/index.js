import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/user/Main.vue')
const TeacherDetail = () => import('@/components/user/TeacherDetail.vue')
const TeacherList = () => import('@/components/user/TeacherList.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/teacher_detail',
      name: 'TeacherDetail',
      component: TeacherDetail
    },
    {
      path: '/teacher_list',
      name: 'TeacherList',
      component: TeacherList
    }
  ]
})
