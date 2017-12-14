<template lang="html">
  <div class="teacher-center">
    <template v-if="PublicCenter">
     <div class="teacher-item">
      <img :src="PublicCenter.image" alt="">
      <div class="teacher-info-text">
        <p class="detail">
          <span class="name">程可欣</span>
          <span class="sub-tag">数</span>
            <span class="grade-tag">小</span>
            <span class="grade-tag">初</span>
            <span class="grade-tag">高</span>
          <span class="teach-times">编辑资料</span>
        </p>
        <p class="accept">
            <span>专职教师</span>
            <span>已认证</span>
            <span>明星教师</span>
        </p>
      </div>
    </div>
      <div class="user">
        <ul>
            <li>
              <div class="user_left">
              <img src="../../../static/img/accept.png" alt="a">
              <span>我的课程</span>
              </div>
              <div class="user_right">
                <span>></span>
              </div>
            </li>
           <li>
              <div class="user_left">
              <img src="../../../static/img/accept.png" alt="a">
              <span>我的试讲</span>
              </div>
              <div class="user_right">
                <span>></span>
              </div>
            </li>
            </ul>
      </div>
      <div class="detail">
        <ul>
          <li>
              <div class="user_left">
              <img src="../../../static/img/accept.png" alt="a">
              <span>客服电话</span>
              </div>
              <div class="user_right">
                <span>></span>
              </div>
            </li>
          <li>
              <div class="user_left">
              <img src="../../../static/img/accept.png" alt="a">
              <span>关于知途家教</span>
              </div>
              <div class="user_right">
                <span>></span>
              </div>
            </li>
        </ul>
      </div>
      <div class="remove">
        <span>退出登录</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TeacherCenter',
  props: ['PublicCenter'],
  data () { return {} }
}
</script>

<style lang="scss" scoped>
  @import 'static/css/mixin';
  .a,.teacher-item {
    background: #fff;
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
        color: #cecece;
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
        background-image: url('../../../static/img/accept.png');
        background-repeat: no-repeat;
        background-size: Rem(15) Rem(15);
        background-position: Rem(0) Rem(2);
      }
      span:nth-of-type(1) {
        margin-left: 0;
      }
    }
  }
  .user {
    margin-top: Rem(11);
    height: Rem(100);
    width: 100%;
    background: #fff;
    li:nth-child(3) {
      border: none;
    }
    li {
      border-bottom: 1px solid #efefef;
      height: Rem(50);
      width: 100%;
      .user_left {
        height: 100%;
        float: left;
        padding-left: Rem(15);
        line-height: Rem(50);
        margin-top: Rem(-5);
        img {
          width: Rem(20);
          height: Rem(20);
        }
        span {
          font-size: Rem(16);
          font-weight: 400;
          color: #333333;
          vertical-align: middle;
        }
      }
      .user_right {
        float: right;
        margin-right: Rem(15);
      }
    }
  }
    .detail {
      background: #fff;
      height: Rem(100);
      width: 100%;
      margin-top: Rem(11);
      li:nth-child(3) {
        border: none;
      }
      li {
        border-bottom: 1px solid #efefef;
        height: Rem(50);
        width: 100%;
        .user_left {
          height: 100%;
          float: left;
          padding-left: Rem(15);
          line-height: Rem(50);
          margin-top: Rem(-5);
          img {
            width: Rem(20);
            height: Rem(20);
          }
          span {
            font-size: Rem(16);
            font-weight: 400;
            color: #333333;
            vertical-align: middle;
          }
        }
        .user_right {
          float: right;
          margin-right: Rem(15);
        }
      }
    }
  .remove{
    height: Rem(50);
    width: 100%;
    background: #fff;
    margin-top: Rem(11);
    span{
      padding: Rem(0) Rem(150);
      color: red;
      font-size: Rem(16);
      vertical-align: middle;
    }

  }
</style>
