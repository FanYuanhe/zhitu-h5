<template lang="html">
  <div class="personal-center">
    <template v-if="mainInfo">
      <UserCenter v-if="ztData.role_type == '1'" :centerInfo=mainInfo.user></UserCenter>
      <TeacherCenter v-if="ztData.role_type == '2'" :centerInfo=mainInfo.teacher></TeacherCenter>
    </template>
  </div>
</template>

<script>
import axiosHeaders from '../../static/js/axiosHeaders';
import TeacherCenter from './teacher/TeacherCenter.vue';
import UserCenter from './user/UserCenter.vue'
export default {
  name: 'PublicPersonalCenter',
  data () {
    return {
      ztData: JSON.parse(localStorage.getItem('zt_data')),
      mainInfo: {}
    }
  },
  mounted () {
    this.getData();
  },
  methods: {
    getData () {
      axiosHeaders.setHeaders();
      this.axios({
        methods: 'get',
        url: 'api/user/info'
      }).then((res) => {
        let dataRes = res.data;
        if (dataRes.error_code === 0) {
          this.mainInfo = dataRes.data;
        }
      })
    }
  },
  components: { TeacherCenter, UserCenter }
}
</script>

<style lang="scss">
</style>
