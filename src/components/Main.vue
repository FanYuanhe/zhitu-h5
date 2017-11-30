<template>
  <div class="main">
    <div class="head">
      <img src="static/img/logo.png" alt="">
      <div class="my">
        <img src="static/img/my.png" alt="">
        <span>我的</span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="static/img/banner.png" alt=""></div>
        <div class="swiper-slide"><img src="static/img/banner.png" alt=""></div>
        <div class="swiper-slide"><img src="static/img/banner.png" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="subject-box">
      <ul class="clearfix">
        <router-link :to="{ name: 'TeacherList', params: {} }">
          <li>
            <img src="static/img/userlogo.png" alt="">
            <p>数学</p>
          </li>
        </router-link>
        <router-link :to="{ name: 'TeacherList', params: {} }">
          <li>
            <img src="static/img/userlogo.png" alt="">
            <p>数学</p>
          </li>
        </router-link>
        <router-link :to="{ name: 'TeacherList', params: {} }">
          <li>
            <img src="static/img/userlogo.png" alt="">
            <p>数学</p>
          </li>
        </router-link>
        <router-link :to="{ name: 'TeacherList', params: {} }">
          <li>
            <img src="static/img/userlogo.png" alt="">
            <p>数学</p>
          </li>
        </router-link>
        <router-link :to="{ name: 'TeacherList', params: {} }">
          <li>
            <img src="static/img/userlogo.png" alt="">
            <p>数学</p>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="hot-teacher">
      热门教师
    </div>
    <TeacherListComponent></TeacherListComponent>
  </div>
</template>

<script>
import Swiper from '../../static/widget/swiper/swiper'
import TeacherListComponent from './TeacherListComponent.vue'
export default {
  name: 'Main',
  data () {
    return {

    }
  },
  mounted () {
    Swiper('.swiper-container', {
      autoplay: '1000',
      loop: true,
      pagination: '.swiper-pagination'
    })
  },
  methods: {

  },
  components: { TeacherListComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import 'static/css/mixin';
  @import 'static/widget/swiper/swiper';
  .clearfix::after {
    display: block;
    content: "";
    height: 0;
    clear: both;
  }
  .head,.subject-box {
    background: #fff;
  }
  .head {
    padding: Rem(12);
    font-size: 0;
    img:nth-of-type(1) {
      width: Rem(85);
      height: Rem(17);
    }
    .my {
      float: right;
      img {
        width: Rem(15);
        height: Rem(15);
      }
      span {
        margin-left: Rem(4);
        vertical-align: Rem(2);
        font-size: Rem(15);
        color: #262323;
      }
    }
  }
  .swiper-slide {
    font-size: 0;
    img {
      width: 100%;
      height: Rem(125);
    }
  }
  .swiper-pagination {
    bottom: 0 !important;
  }
  .subject-box {
    height: Rem(72);
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: Rem(14) 0;
    li {
      width: 20%;
      display: inline-block;
      font-size: 0;
      text-align: center;
      img {
         width: Rem(48);
         height: Rem(48);
         border-radius: 100%;
      }
     p {
       font-size: Rem(14);
       color: #262323;
       margin-top: Rem(8);
     }
    }
  }
  .hot-teacher {
    font-size: Rem(18);
    color: #ff7200;
    padding: Rem(15);
  }
</style>
