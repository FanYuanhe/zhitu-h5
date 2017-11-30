import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
// import TeacherList from '@/components/TeacherList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
    // {
    //   path: '/teacher_list',
    //   name: 'TeacherList',
    //   component: TeacherList
    // }
  ]
})
