<template lang="html">
  <div class="a teacher-item">
    <img src="static/img/userlogo.png" alt="">
    <div class="teacher-info-text">
      <p class="detail">
        <span class="name">陈老师</span>
        <span class="sub-tag">数学</span>
        <span class="grade-tag">小</span>
        <span class="grade-tag">中</span>
        <span class="grade-tag">高</span>
        <span class="teach-times">¥300/小时</span>
      </p>
      <p class="school">
        <span>九年教龄</span>
        <span>中央美术学院</span>
        <span>物理系</span>
      </p>
      <p class="accept">
        <span>大学生</span>
        <span>已认证</span>
      </p>
      <i>已授课300小时</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherInfoComponent',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'static/css/mixin';
  .a,.teacher-item {
    background: #fff;
    height: Rem(110);
    padding-left: Rem(110);
    position: relative;
    margin-bottom: Rem(10);
    img:nth-of-type(1) {
      position: absolute;
      left: Rem(15);
      top: Rem(15);
      width: Rem(80);
      height: Rem(80);
    }
    .teacher-info-text {
      height: Rem(110);
      font-size: 0;
    }
    .detail {
      width: 100%;
      display: inline-block;
      margin-top: Rem(18);
      span {
        margin-left: Rem(4);
      }
      span:nth-of-type(1) {
        margin-left: 0;
      }
      .name {
        font-size: Rem(15);
        color: #262323;
      }
      .sub-tag {
        font-size: Rem(12);
        display: inline-block;
        padding: 0 Rem(4);
        color: #fff;
        border-radius: Rem(3);
        background: #52c644;
      }
      .grade-tag {
        display: inline-block;
        width: Rem(15);
        text-align: center;
        height: Rem(15);
        line-height: Rem(15);
        font-size: Rem(12);
        border-radius: Rem(3);
        border: 1px solid #097c25;
        color: #097c25;
      }
      .teach-times {
        font-size: Rem(13);
        color: #ee4034;
        float: right;
        margin-right: Rem(15);
      }
    }
    .school {
      margin-top: Rem(5);
      span {
        font-size: Rem(13);
        color: #888;
        margin-left: Rem(4);
      }
      span:nth-of-type(1) {
        margin-left: 0;
      }
    }
    .accept {
      position: absolute;
      bottom: Rem(15);
      span {
        font-size: Rem(13);
        color: #262323;
        margin-left: Rem(4);
        display: inline-block;
        padding-left: Rem(16);
        background-image: url('../../../../static/img/accept.png');
        background-repeat: no-repeat;
        background-size: Rem(15) Rem(15);
        background-position: Rem(0) Rem(2);
      }
      span:nth-of-type(1) {
        margin-left: 0;
      }
    }
    i {
      font-style: normal;
      font-size: Rem(13);
      color: #888;
      position: absolute;
      right: Rem(15);
      bottom: Rem(15);
    }
  }
</style>
