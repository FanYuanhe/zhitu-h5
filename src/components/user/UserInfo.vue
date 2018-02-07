<template>
  <div class="user-info">
    <mt-cell label="头像" is-link>
      <img :src="userInfo.image" alt="">
    </mt-cell>
    <mt-cell label="昵称" :value="userInfo.name" is-link></mt-cell>
    <mt-cell label="年级" value="高中" is-link></mt-cell>
    <mt-cell label="性别" value="男" is-link></mt-cell>
    <div @click="selectProvinceCity">
      <mt-cell label="城市" value="城市" is-link></mt-cell>
    </div>
    <mt-cell label="常用地址" :value="userInfo.home_address" is-link></mt-cell>

    <province-city ref="prefecturePopup"></province-city>
  </div>
</template>

<script>
  import {Cell} from 'mint-ui'
  import ProvinceCity from '../modules/province_city'

  export default {
    name: `user-info`,
    components: {
      'mt-cell': Cell,
      'province-city': ProvinceCity
    },
    data () {
      return {
        userInfo: {
          image: '',
          name: '',
          grade: '请选择',
          sex: '请选择',
          city: '请选择',
          home_address: ''
        }
      }
    },
    mounted () {
      const self = this
      self.axios({
        url: '/api/user/info',
        method: 'get'
      }).then((res) => {
        if (res.data.message === 'success') {
          self.userInfo = res.data.data.user
        }
      })
    },
    methods: {
      selectProvinceCity: function () {
        this.$refs.prefecturePopup.showPopup()
      }
    }
  }
</script>

<style lang="scss">

</style>
