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
const AboutZhitu = () => import('@/components/teacher/AboutZhitu.vue')
Vue.use(Router)

/**
 * (resolve) => require(['@/components/teacher/TeacherInfoCase.vue'], resolve) 这种方式有利于减轻项目第一次加载网页的负担
 */
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
      path: '/teacher_list',
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
      path: '/user_info',
      name: '用户信息',
      component: (resolve) => require(['@/components/user/UserInfo.vue'], resolve)
    },
    {
      path: '/teacher_lecture',
      name: 'TeacherLecture',
      component: TeacherLecture
    },
    {
      path: '/user_course',
      name: 'UserCourse',
      component: (resolve) => require(['@/components/user/UserCourse.vue'], resolve)
    },
    {
      path: '/teacher_course',
      name: 'TeacherCourse',
      component: (resolve) => require(['@/components/teacher/TeacherCourse.vue'], resolve)
    },
    {
      path: '/teacher_info',
      name: 'TeacherInfo',
      component: (resolve) => require(['@/components/teacher/TeacherInfo.vue'], resolve)
    },
    {
      path: '/teacher_info_introduce',
      name: 'TeacherInfoIntroduce',
      component: (resolve) => require(['@/components/teacher/TeacherInfoIntroduce.vue'], resolve)
    },
    {
      path: '/teacher_info_case',
      name: 'TeacherInfoCase',
      component: (resolve) => require(['@/components/teacher/TeacherInfoCase.vue'], resolve)
    },
    {
      path: '/teacher_info_experience',
      name: 'TeacherInfoExperience',
      component: (resolve) => require(['@/components/teacher/TeacherInfoExperience.vue'], resolve)
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: (resolve) => require(['@/components/Avatar.vue'], resolve)
    },
    {
      path: '/about_zhitu',
      name: 'AboutZhitu',
      component: AboutZhitu
    }
  ]
})
