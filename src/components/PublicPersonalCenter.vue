<template lang="html">
  <div class="personal-center">
    <TeacherCenter v-if="ztData.role_type == '2'"></TeacherCenter>
    <UserCenter v-if="ztData.role_type == '1'"></UserCenter>
  </div>
</template>

<script>
import TeacherCenter from './teacher/TeacherCenter.vue';
import UserCenter from './user/UserCenter.vue'
export default {
  name: 'PublicPersonalCenter',
  data () {
    return {
      ztData: JSON.parse(localStorage.getItem('zt_data'))
    }
  },
  mounted () {
    console.log(this.ztData);
  },
  methods: {

  },
  components: { TeacherCenter, UserCenter }
}
</script>

<style lang="scss">
</style>
