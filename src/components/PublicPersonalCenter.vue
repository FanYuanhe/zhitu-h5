<template lang="html">
  <div class="personal-center">
    <TeacherCenter v-if="ztData.role_type == '2'" :PublicCenter='mainInfo.teacher'></TeacherCenter>
    <UserCenter v-if="ztData.role_type == '1'" :PublicCenter=mainInfo.user></UserCenter>
  </div>
</template>

<script>
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
      this.axios({
        methods: 'get',
        url: 'api/user/info'
      }).then((res) => {
        const dataRes = res.data;
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
