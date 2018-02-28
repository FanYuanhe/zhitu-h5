<template>
  <div class="user-info">
    <mt-header class="nav-header" title="个人资料" fixed>
      <router-link to="/public_personal_center" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="nav-body">
      <mt-cell label="头像" is-link>
        <img :src="userInfo.image" alt="">
      </mt-cell>
      <div @click="inputName">
        <mt-cell
          label="姓名"
          :value="userInfo.name"
          is-link>
        </mt-cell>
      </div>
      <div @click="selectGrade">
        <mt-cell
          label="年级"
          :value="userInfo.grade_label.label"
          is-link>
        </mt-cell>
      </div>
      <div @click="selectSex">
        <mt-cell
          label="性别"
          :value="userInfo.sex_label.label"
          is-link>
        </mt-cell>
      </div>
      <div @click="selectProvinceCity">
        <mt-cell
          label="城市"
          :value="userInfo.city_label.label"
          is-link>
        </mt-cell>
      </div>
      <div @click="inputAddress">
        <mt-cell
          label="常用地址"
          :value="userInfo.home_address"
          is-link>
        </mt-cell>
      </div>
    </div>


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
    <zt-input-popup :popupVisible.sync="inputPopupVisible" @confirm="saveInputValue" :title="inputPopupTitle"
                    :currentValue="inputPopupCurrentValue"></zt-input-popup>
  </div>
</template>

<script>
  import {Cell, Header, Button} from 'mint-ui'
  import Sex from '../modules/sex_popup'
  import Tag from '../modules/tags_popup'
  import ProvinceCity from '../modules/province_city'
  import InputRightPopup from '@/components/modules/input_right_popup.vue'

  export default {
    name: `user-info`,
    components: {
      'mt-cell': Cell,
      'sex': Sex,
      'province-city': ProvinceCity,
      'tag': Tag,
      'zt-input-popup': InputRightPopup,
      'mt-header': Header,
      'mt-button': Button
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
        },
        inputPopupVisible: false,
        inputPopupTitle: '',
        inputPopupKey: '',
        inputPopupCurrentValue: ''
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
      },
      inputName: function () {
        this.inputPopupCurrentValue = this.userInfo.name
        this.inputPopupVisible = true
        this.inputPopupKey = 'name'
        this.inputPopupTitle = '请输入姓名'
      },
      inputAddress: function () {
        this.inputPopupCurrentValue = this.userInfo.home_address
        this.inputPopupVisible = true
        this.inputPopupKey = 'home_address'
        this.inputPopupTitle = '请输入常用地址'
      },
      saveInputValue: function (value) {
        this.modifyUserInfo({[this.inputPopupKey]: value})
      }
    }
  }
</script>

<style lang="scss">
  .nav-header {
    background: #fff;
    color: #000;
  }

  .nav-body {
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
  }
</style>
