<template lang="html">
  <div class="teacher-detail">
    <TeacherInfoComponent></TeacherInfoComponent>
    <div class="info-box">
      <div class="assess-teacher-info">
        <p class="title">个人简介</p>
        <div class="content">
          <p>哈哈哈哈哈哈哈哈哈将电话卡建设的科技啊啥的空间啊啥的空间撒谎的空间啊啥的</p>
        </div>
      </div>
      <div class="assess-teacher-info">
        <p class="title">获奖经历</p>
        <div class="content">
          <p>哈哈哈</p>
          <p>客户端就撒的卡还是大卡</p>
          <p>还是大卡</p>
        </div>
      </div>
      <div class="assess-teacher-info">
        <p class="title">家教经历</p>
        <div class="content">
          <p>哈哈哈哈哈哈哈哈哈将电话卡建设的科技啊啥的空间啊啥的空间撒谎的空间啊啥的</p>
        </div>
      </div>
    </div>
    <div class="assess-box assess-teacher-info">
      <p class="title">学生评价</p>
      <TeacherAssessComponent></TeacherAssessComponent>
    </div>
    <div class="order-line">
      <div class="order-text">
        满意就预约吧
      </div>
      <hr>
    </div>
    <div class="order-btn">
      <div class="btn collect"><span>收藏</span></div>
      <div class="btn order-now">预约试讲</div>
    </div>
  </div>
</template>

<script>
import TeacherInfoComponent from './TeacherInfoComponent.vue'
import TeacherAssessComponent from './TeacherAssessComponent.vue'
export default {
  name: 'TeacherDetail',
  data () {
    return {

    }
  },
  components: { TeacherInfoComponent, TeacherAssessComponent }
}
</script>

<style lang="scss">
  @import 'static/css/mixin';
  .info-box {
    background: #fff;
    padding: Rem(15) 0 Rem(7) 0;
    margin-bottom: Rem(10);
  }
  .assess-teacher-info {
    padding: 0 Rem(15);
    font-size: 0;
    .title {
      font-size: Rem(15);
      color: #262323;
      display: inline-block;
      padding-left: Rem(18);
      background-image: url('../../static/img/accept.png');
      background-repeat: no-repeat;
      background-size: Rem(15) Rem(15);
      background-position: 0 Rem(2);
    }
    .content {
      padding: Rem(8) 0 Rem(8) Rem(15);
      font-size: Rem(13);
      color: #888;
    }
  }
  .assess-box {
    background: #fff;
    .title {
      padding: Rem(15) 0 0 Rem(18);
      background-position: 0 Rem(18);
    }
  }
  .order-line {
    width: 60%;
    position: relative;
    margin: Rem(30) auto Rem(80) auto;
    hr {
      margin: 0;
      padding: 0;
      border-top: 1px solid #9e9c9c;
    }
    .order-text {
      color: #9e9c9c;
      position: absolute;
      top: Rem(-10);
      left: Rem(60);
      font-size: Rem(15);
      background: #f5f5f5;
      padding: 0 Rem(8);
    }
  }
  .order-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 0;
    .btn {
      display: inline-block;
      font-size: Rem(15);
      color: #fff;
      height: Rem(50);
      line-height: Rem(50);
      text-align: center;
    }
    .collect {
      width: 15%;
      background: #49a775;
      background-image: url('../../static/img/userlogo.png');
      background-repeat: no-repeat;
      background-size: Rem(20) Rem(20);
      background-position: Rem(18) Rem(6);
      span {
        position: relative;
        top: Rem(12);
        font-size: Rem(13);
      }
    }
    .order-now {
      width: 85%;
      background: #2dc072;
    }
  }
</style>
