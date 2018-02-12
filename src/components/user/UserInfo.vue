<template>
  <div class="user-info">
    <mt-cell label="头像" is-link>
      <img :src="userInfo.image" alt="">
    </mt-cell>
    <mt-cell
      label="昵称"
      :value="userInfo.name"
      is-link>
    </mt-cell>
    <div @click="selectGrade">
      <mt-cell
        label="年级"
        :value="userInfo.grade_label"
        is-link>
      </mt-cell>
    </div>
    <div @click="selectSex">
      <mt-cell
        label="性别"
        :value="userInfo.sex_label"
        is-link>
      </mt-cell>
    </div>
    <div @click="selectProvinceCity">
      <mt-cell
        label="城市"
        :value="userInfo.city_label"
        is-link>
      </mt-cell>
    </div>
    <mt-cell
      label="常用地址"
      :value="userInfo.home_address"
      is-link>
    </mt-cell>

    <!--弹窗-->
    <province-city ref="cityPopup"
                   type="city"
                   @select="handleSelectCity"
                   :value="userInfo.city"
                   :closeOnClickModal="true">
    </province-city>
    <sex
      ref="sexPopup"
      :closeOnClickModal="true"
      :currentValue="userInfo.sex"
      @select="handleSelectSex">
    </sex>
    <tag ref="gradePopup"
         type="grade"
         @select="handleSelectGrade"
         :value="userInfo.grade"
         :closeOnClickModal="true">
    </tag>
  </div>
</template>

<script>
  import {Cell} from 'mint-ui'
  import Sex from '../modules/sex_popup'
  import Tag from '../modules/tags_popup'
  import ProvinceCity from '../modules/province_city'

  export default {
    name: `user-info`,
    components: {
      'mt-cell': Cell,
      'sex': Sex,
      'province-city': ProvinceCity,
      'tag': Tag
    },
    data () {
      return {
        userInfo: {
          image: '',
          name: '',
          grade: 0,
          grade_label: '',
          sex: 1,
          sex_label: '',
          city: 0,
          city_label: '',
          home_address: ''
        }
      }
    },
    mounted () {
      this.getUserInfo()
    },
    methods: {
      getUserInfo: function () {
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
      modifyUserInfo: function (params = {}) {
        const self = this
        self.axios({
          url: '/api/user/setuserinfo',
          method: 'post',
          params: params
        }).then((res) => {
          if (res.data.error_code === 0) {
            self.getUserInfo()
          }
        })
      },
      selectProvinceCity: function () {
        this.$refs.cityPopup.showPopup()
      },
      handleSelectCity: function (opt) {
        this.modifyUserInfo({city: opt.cityId})
      },
      selectSex: function () {
        this.$refs.sexPopup.showPopup()
      },
      handleSelectSex: function (opt) {
        this.modifyUserInfo({sex: opt.value})
      },
      selectGrade: function () {
        this.$refs.gradePopup.showPopup()
      },
      handleSelectGrade: function (opt) {
        this.modifyUserInfo({grade: opt.id})
      }
    }
  }
</script>

<style lang="scss">

</style>
