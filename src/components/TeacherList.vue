<template lang="html">
  <div class="teacher-list">
    <div class="teacher-item">
      <img src="static/img/userlogo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherList',
  data () {
    return {

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped="">
  @import 'static/css/mixin';
  .teacher-item {
    height: Rem(110);
    padding-left: Rem(100);
    position: relative;
    img:nth-of-type(1) {
      position: absolute;
      left: Rem(15);
      width: Rem(80);
      height: Rem(80);
    }
  }
</style>
