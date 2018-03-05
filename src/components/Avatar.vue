<template>
  <div class="avatar">
    <mt-header title="头像" class="nav-header">
      <mt-button @click="urlHistoryBack" slot="left" icon="back"></mt-button>
      <mt-button @click="clickInput" slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="nav-body">
      <input type="file" @change="handleUpload" id="avatarInput">
      <img :src="url" alt="">
    </div>
  </div>
</template>

<script>
  import { Header, Button, Toast } from 'mint-ui'

  export default {
    components: {
      'mt-header': Header,
      'mt-button': Button
    },
    data () {
      return {
        url: this.$route.query.avatar
      }
    },
    mounted () {
    },
    methods: {
      clickInput: function () {
        const input = document.getElementById('avatarInput')
        input.click()
      },
      handleUpload: function (event) {
        const self = this
        const formData = new FormData()
        const file = event.target.files[0]
        formData.append('file', file)
        self.axios({
          url: '/cmn/file/upload',
          method: 'post',
          data: formData
        }).then((res) => {
          if (res.data.error === 0) {
            const userData = JSON.parse(localStorage.getItem('zt_data'))
            let modifyInfoUrl = ''
            if (userData.role_type === 1) {
              modifyInfoUrl = '/api/user/setuserinfo'
            }
            if (userData.role_type === 2) {
              modifyInfoUrl = '/api/user/setteacherinfo'
            }
            if (!modifyInfoUrl) {
              Toast('获取用户信息失败，请重新登录')
              return
            }
            self.axios({
              url: modifyInfoUrl,
              method: 'post',
              data: {
                image: res.data.data.filename
              }
            }).then((response) => {
              if (response.data.error_code === 0) {
                self.url = res.data.data.fileSignUrl
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .avatar {
    .nav-body {
      background: #000;
      bottom: 0;
      input {
        display: none;
      }
      img {
        position: absolute;
        top: 50%;
        width: 100vw;
        height: 100vw;
        margin-top: -50vw;
      }
    }
  }
</style>
