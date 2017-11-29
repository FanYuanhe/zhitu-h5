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
  </div>
</template>

<script>
import Swiper from '../../static/widget/swiper/swiper'
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
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import 'static/widget/swiper/swiper';
  .head {
    background: #fff;
  }
  .head {
    padding: Rem(12);
    font-size: 0;
    img:nth-of-type(1) {
      width: Rem(85);
      height: Rem(17);
      margin-left: Rem(15);
    }
    .my {
      float: right;
      margin-right: Rem(15);
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
</style>
