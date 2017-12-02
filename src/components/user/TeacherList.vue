<template lang="html">
  <div class="teachers-list">
    <div class="search-bar">
      <span>年级<i></i></span>
      <span>学科<i></i></span>
      <span>教师类型</span>
    </div>
    <TeacherListComponent></TeacherListComponent>
    <div class="tips">
      <div class="search-select-box">
        <span class="select-item">数学</span>
        <span class="select-item">数学</span>
        <span class="select-item">数学</span>
        <span class="select-item">数学</span>
        <span class="select-item">数学</span>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherListComponent from './components/TeacherListComponent.vue'
export default {
  name: 'TeacherList',
  data () {
    return {

    }
  },
  components: { TeacherListComponent }
}
</script>

<style lang="scss">
  @import 'static/css/mixin';
  .teachers-list {
    margin-top: Rem(45);
    .search-bar {
      font-size: 0;
      width: 100%;
      height: Rem(35);
      position: fixed;
      top: 0;
      z-index: 999;
      background: #fff;
      span {
        position: relative;
        display: inline-block;
        width: 33.333%;
        text-align: center;
        color: #040000;
        line-height: Rem(35);
        font-size: Rem(14);
        i {
          position: absolute;
          right: 0;
          top: Rem(7.5);
          display: inline-block;
          height: Rem(20);
          width: 1px;
          background: #dde2f0;
        }
      }
      span:after{
        position:absolute;
        right: Rem(33);
        top: Rem(15);
        border-left:4px solid transparent;
        border-right:4px solid transparent;
        border-top:4px solid #040000;
        content:" ";
        display:block;
        width:0;
        height:0
      }
      span:nth-of-type(3):after {
        right: Rem(20);
      }
    }
  }
  .tips {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    .search-select-box {
      font-size: 0;
      position: fixed;
      top: Rem(35);
      width: 100%;
      padding: Rem(2) 2%;
      background: #fff;
      border-top: 1px solid #dde2f0;
      .select-item {
        display: inline-block;
        width: 20%;
        text-align: center;
        margin: Rem(4) 2%;
        height: Rem(40);
        line-height: Rem(40);
        background: #f5f5f5;
        color: #333;
        font-size: Rem(14);
        border-radius: Rem(4);
      }
    }
  }
</style>
