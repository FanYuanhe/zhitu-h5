import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TeacherList from '@/components/TeacherList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/teacher_list',
      name: 'TeacherList',
      component: TeacherList
    }
  ]
})
