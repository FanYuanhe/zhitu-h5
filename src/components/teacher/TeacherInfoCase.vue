<template>
  <div class="teacher-info-case">
    <mt-header class="nav-header" title="编辑成功案例">
      <router-link to="/teacher_info" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <case-experience @submit="handleSubmit"></case-experience>

  </div>
</template>

<script>
  import {Header, Button} from 'mint-ui'
  import CaseExperience from './components/CaseExperienceComponent'

  export default {
    components: {
      'mt-header': Header,
      'mt-button': Button,
      CaseExperience
    },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      handleSubmit: function (info) {
        const self = this
        self.axios({
          url: '/api/user/setteacherextend',
          method: 'post',
          params: {
            type: 1,
            title: info.title,
            content: info.detail,
            start_time: info.startDate,
            end_time: info.endDate
          }
        }).then((res) => {
          if (res.data.error_code === 0) {
            self.$router.push('/teacher_info')
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .teacher-info-case {
    .nav-header {
      background: #fff;
      color: #000;
    }
  }
</style>
