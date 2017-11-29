<template>
  <div class="hello">
    <img src="static/img/logo.png" alt="">
    <!-- <div class="test-bg"></div> -->
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link :to="{ name: 'TeacherList', params: {} }">跳转到教师列表</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到知途科技'
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'static/css/mixin';
  @import 'static/css/reset';
  .hello {
    // background: red;
  }
  .test-bg {
    width: Rem(100);
    height: Rem(100);
    background: url('../../static/img/logo.png');
  }
</style>
