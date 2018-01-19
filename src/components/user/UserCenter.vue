<template lang="html">
  <div class="user-center">
  <template>
    <div class="head" v-if="centerInfo">
        <div class="head_img">
          <img :src="centerInfo.image" alt="a">
        </div>
        <div class="head_phone">
          <span class="my_phone">{{centerInfo.phone}}</span>
        </div>
        <div class="head_edit">
          <!--<span class="edit">编辑</span>-->
        </div>
    </div>
    <div class="user">
      <ul>
        <router-link :to="{ name: 'UserCollect', params: {} }" tag="li">
          <div class="user_left">
          <img src="../../../static/img/me_collect.png" alt="a">
          <span>我的收藏</span>
          </div>
          <div class="user_right">
            <span><img src="../../../static/img/me_arrow.png" alt="a"></span>
          </div>
        </router-link>
        <router-link :to="{ name: 'UserLecture', params: {} }" tag="li">
          <div class="user_left">
            <img src="../../../static/img/me_try.png" alt="a">
            <span>查看试讲</span>
          </div>
          <div class="user_right">
            <span><img src="../../../static/img/me_arrow.png" alt="a"></span>
          </div>
        </router-link>
        <router-link :to="{ name: 'UserCourse', params: {} }" tag="li">
          <div class="user_left">
            <img src="../../../static/img/me_course.png" alt="a">
            <span>我的课程</span>
          </div>
          <div class="user_right">
            <span><img src="../../../static/img/me_arrow.png" alt="a"></span>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="detail">
      <ul>
      <a href="tel:15611004123">
        <li>
          <div class="user_left">
            <img src="../../../static/img/me_kfphone.png" alt="a">
            <span>客服电话</span>
          </div>
          <div class="user_right">
            <span><img src="../../../static/img/me_arrow.png" alt="a"></span>
          </div>
        </li>
      </a>
      <router-link :to="{ name: 'AboutZhitu', params: {} }">
        <li>
          <div class="user_left">
            <img src="../../../static/img/me_about_us.png" alt="a">
            <span>关于知途家教</span>
          </div>
          <div class="user_right">
            <span><img src="../../../static/img/me_arrow.png" alt="a"></span>
          </div>
        </li>
      </router-link>
      </ul>
    </div>
    <div class="remove" @click="signOut">退出登录</div>
  </template>
  </div>
</template>
<script>
export default {
  name: 'UserCenter',
  props: ['centerInfo'],
  data () {
    return {
    }
  },
  methods: {
    signOut () {
      localStorage.clear();
      location.href = '#/';
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import 'static/css/mixin';
  .head{
    position: relative;
    height: Rem(75);
    width: 100%;
    background: #fff;
    .head_img{
      width: Rem(50);
      height: Rem(50);
      padding: Rem(12.5) Rem(12.5);
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .head_phone{
      position: absolute;
      top: Rem(5);
      left: Rem(75);
      .my_phone{
        font-size: Rem(15);
        font-weight: 200;
        color:#333333;
      }
    }
    .head_edit{
      position: absolute;
      top: Rem(5);
      right: Rem(15);
      .edit{
        color:#999999;
        font-size: Rem(13);
        font-weight: 400;
      }
    }
  }
  .user {
    margin-top: Rem(11);
    height: Rem(150);
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
          font-size: Rem(15);
          font-weight: 400;
          color: #333333;
          vertical-align: middle;
        }
      }
      .user_right {
        height: Rem(50);
        line-height: Rem(50);
        font-size: Rem(15);
        float: right;
        margin-right: Rem(15);
        img {
          height: 50%;
          margin: 45% 0 0 0;
        }
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
          height: Rem(50);
          line-height: Rem(50);
          font-size: Rem(15);
          float: right;
          margin-right: Rem(15);
          img {
            height: 50%;
            margin: 45% 0 0 0;
          }
        }
      }
    }
  .remove{
    height: Rem(50);
    line-height: Rem(50);
    text-align: center;
    width: 100%;
    background: #fff;
    margin-top: Rem(11);
    color: red;
    font-size: Rem(16);
  }
</style>
