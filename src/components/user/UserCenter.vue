<template lang="html">
  <div class="user-center">
    <div class="head">
        <div class="head_img">
          <img src="../../../static/img/userlogo.png" alt="a">
        </div>
        <div class="head_phone">
          <span class="my_phone">17301308426</span>
        </div>
        <div class="head_edit">
          <span class="edit">编辑</span>
        </div>
    </div>
    <div class="user">
      <ul>
          <router-link to="my_collection" tag="li">
            <div class="user_left">
            <img src="../../../static/img/accept.png" alt="a">
            <span>我的收藏</span>
            </div>
            <div class="user_right">
              <span>></span>
            </div>
          </router-link>
         <li>
            <div class="user_left">
            <img src="../../../static/img/accept.png" alt="a">
            <span>查看试讲</span>
            </div>
            <div class="user_right">
              <span>></span>
            </div>
          </li>
         <li>
            <div class="user_left">
            <img src="../../../static/img/accept.png" alt="a">
            <span>我的课程</span>
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
  </div>
</template>
<script>
import TeacherListComponent from './components/TeacherListComponent.vue'
export default {
  name: 'UserCenter',
  data () {
    return {}
  },
  components: {
    TeacherListComponent
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
        font-size: Rem(16);
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
