import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/user/Main.vue')
const TeacherDetail = () => import('@/components/user/TeacherDetail.vue')
const TeacherList = () => import('@/components/user/TeacherList.vue')
const Login = () => import('@/components/Login.vue')
const FastLogin = () => import('@/components/FastLogin.vue')
const PublicPersonalCenter = () => import('@/components/PublicPersonalCenter.vue')
const MyCollection = () => import('@/components/user/components/MyCollection.vue')
const Lecture = () => import('@/components/user/components/Lecture.vue')
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
      path: '/my_collection',
      name: 'MyCollection',
      component: MyCollection
    },
    {
      path: '/lecture',
      name: 'Lecture',
      component: Lecture
    }
  ]
})
