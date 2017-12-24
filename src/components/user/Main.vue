<template>
  <div class="main">
    <div class="head">
      <img src="static/img/logo.png" alt="">
      <div class="my">
        <img src="static/img/my.png" alt="">
        <span @click="goUserCenter">我的</span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <template v-for="item in mainInfo.banner">
          <div class="swiper-slide"><img :src="item.image" alt=""></div>
        </template>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="subject-box">
      <ul class="clearfix">
        <template v-for="item in mainInfo.subjects">
          <li @click="goTeacherList(item)">
            <img :src="item.icon" alt="">
            <p>{{ item.name }}</p>
          </li>
        </template>
      </ul>
    </div>
    <div class="hot-teacher">
      热门教师
    </div>
    <template v-if="mainInfo.teacher">
      <TeacherListComponent :teacherList=mainInfo.teacher></TeacherListComponent>
    </template>
  </div>
</template>

<script>
import Swiper from '../../../static/widget/swiper/swiper'
import TeacherListComponent from './components/TeacherListComponent.vue'
import { Indicator, Toast } from 'mint-ui'
export default {
  name: 'Main',
  data () {
    return {
      mainInfo: {}
    }
  },
  mounted () {
    Swiper('.swiper-container', {
      autoplay: '1000',
      loop: true,
      pagination: '.swiper-pagination',
      observer: true,
      observeParents: true
    });
    let mainInfo = JSON.parse(localStorage.getItem('mainInfo'));
    if (mainInfo && mainInfo !== '') {
      this.mainInfo = mainInfo;
    } else {
      this.getMainInfo();
    }
  },
  methods: {
    getMainInfo () {
      Indicator.open({
        spinnerType: 'fading-circle'
      })
      this.axios({
        method: 'get',
        url: '/api/index'
      })
      .then((res) => {
        let dataRes = res.data;
        if (dataRes.message === 'success') {
          this.mainInfo = dataRes.data;
          localStorage.setItem('mainInfo', JSON.stringify(this.mainInfo));
          Indicator.close();
        } else {
          Toast({
            message: dataRes.message,
            position: 'middle',
            duration: 2000
          });
        }
      })
    },
    goUserCenter () {
      let ztData = localStorage.getItem('zt_data');
      if (!ztData) {
        location.href = '#/login';
      } else {
        location.href = '#/public_personal_center';
      }
    },
    goTeacherList (item) {
      location.href = `#/teacher_list?id=${item.id}&sname=${item.name}`
      localStorage.setItem('sname', item.name);
      localStorage.setItem('gradeText', '');
      localStorage.setItem('typeText', '');
      localStorage.setItem('subjectText', '');
      localStorage.setItem('moduleSelected', 'subject')
    }
  },
  components: { TeacherListComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
