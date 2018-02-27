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
const UserInfo = () => import('@/components/user/UserInfo.vue')
const TeacherLecture = () => import('@/components/teacher/TeacherLecture.vue')
const UserCourse = () => import('@/components/user/UserCourse.vue')
const TeacherCourse = () => import('@/components/teacher/TeacherCourse.vue')
const TeacherInfo = () => import('@/components/teacher/TeacherInfo.vue')
const TeacherInfoIntroduce = () => import('@/components/teacher/TeacherInfoIntroduce.vue')
const AboutZhitu = () => import('@/components/teacher/AboutZhitu.vue')
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
      component: UserInfo
    },
    {
      path: '/teacher_lecture',
      name: 'TeacherLecture',
      component: TeacherLecture
    },
    {
      path: '/user_course',
      name: 'UserCourse',
      component: UserCourse
    },
    {
      path: '/teacher_course',
      name: 'TeacherCourse',
      component: TeacherCourse
    },
    {
      path: '/teacher_info',
      name: 'TeacherInfo',
      component: TeacherInfo
    },
    {
      path: '/teacher_info_introduce',
      name: 'TeacherInfoIntroduce',
      component: TeacherInfoIntroduce
    },
    {
      path: '/about_zhitu',
      name: 'AboutZhitu',
      component: AboutZhitu
    }
  ]
})
