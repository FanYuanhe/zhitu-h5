import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/user/Main.vue')
const TeacherDetail = () => import('@/components/user/TeacherDetail.vue')
const TeacherList = () => import('@/components/user/TeacherList.vue')
const Login = () => import('@/components/Login.vue')
const FastLogin = () => import('@/components/FastLogin.vue')
const PublicPersonalCenter = () => import('@/components/PublicPersonalCenter.vue')
const UserCollect = () => import('@/components/user/UserCollect.vue')
const UserLecture = () => import('@/components/user/UserLecture.vue')
const TeacherLecture = () => import('@/components/teacher/TeacherLecture.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/teacher_detail/:id',
      name: 'TeacherDetail',
      component: TeacherDetail
    },
    {
      path: '/teacher_list/:id',
      name: 'TeacherList',
      component: TeacherList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/fastlogin',
      name: 'FastLogin',
      component: FastLogin
    },
    {
      path: '/public_personal_center',
      name: 'PublicPersonalCenter',
      component: PublicPersonalCenter
    },
    {
      path: '/user_collect',
      name: 'UserCollect',
      component: UserCollect
    },
    {
      path: '/user_lecture',
      name: 'UserLecture',
      component: UserLecture
    },
    {
      path: '/teacher_lecture',
      name: 'TeacherLecture',
      component: TeacherLecture
    }
  ]
})
