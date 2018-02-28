<template>
  <div class="teacher-introduce">
    <mt-header title="编辑个人简介">
      <router-link to="/teacher_info" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="textarea">
      <textarea name="" id="" rows="10" placeholder="请输入个人简介..." v-model="introduce">{{introduce}}</textarea>
    </div>
    <mt-button type="primary" class="btn-default" @click="submit()">保存</mt-button>
  </div>
</template>

<script>
  import {Header, Button} from 'mint-ui'

  export default {
    components: {
      'mt-header': Header,
      'mt-button': Button
    },
    data () {
      return {
        introduce: ''
      }
    },
    mounted () {
      const self = this
      self.axios({
        url: '/api/user/info',
        method: 'get'
      }).then((res) => {
        if (res.data.message === 'success') {
          self.introduce = res.data.data.teacher.intro
        }
      })
    },
    methods: {
      submit: function () {
        const self = this
        self.axios({
          url: '/api/user/setteacherinfo',
          method: 'post',
          params: {intro: self.introduce}
        }).then((res) => {
          if (res.data.error_code === 0) {
            self.$router.push({path: '/teacher_info'})
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import 'static/css/mixin';

  .teacher-introduce {
    .textarea {
      background: #fff;
      display: flex;
      textarea {
        width: 90%;
        flex: 1;
        margin: 5%;
        border: 1px solid #c7c7c7;
        font-size: 14px;
      }
    }
  }
</style>
