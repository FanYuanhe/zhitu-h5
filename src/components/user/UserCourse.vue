<template lang="html">
  <div class="user-course">
    <div class="head">
      <div class="ready" :class="status=='1'?'active':''" @click="clickReady">未开始</div>
      <div class="over" :class="status=='2'?'active':''" @click="clickOver">已结束</div>
    </div>
    <CourseListComponent :courseList="mainInfo.course"></CourseListComponent>
  </div>
</template>

<script>
import CourseListComponent from './components/CourseListComponent.vue';
export default {
  name: 'UserCourse',
  data () {
    return {
      status: '1',
      mainInfo: {}
    }
  },
  mounted () {
    this.getData();
  },
  methods: {
    getData () {
      this.axios({
        url: '/api/course/studentlists',
        methods: 'get',
        params: {
          status: this.status
        }
      }).then((res) => {
        let dataRes = res.data;
        if (dataRes.error_code === 0) {
          dataRes.data.course.forEach((i) => {
            i.isShowDetail = false;
          })
          this.mainInfo = dataRes.data;
        }
      })
    },
    clickOver () {
      this.status = '2';
      this.getData();
    },
    clickReady () {
      this.status = '1';
      this.getData();
    }
  },
  components: { CourseListComponent }
}
</script>

<style lang="scss" scoped="">
@import 'static/css/mixin';
.head {
  height: Rem(50);
  background: #fff;
  position: relative;
  width: 100%;
  .ready {
    font-size: Rem(18);
    text-align: center;
    width: Rem(70);
    height: Rem(30);
    position: absolute;
    bottom: Rem(1);
    left: Rem(60);
    border-bottom: 1px solid #fff;
  }
  .over {
    font-size: Rem(18);
    text-align: center;
    width: Rem(70);
    height: Rem(30);
    position: absolute;
    bottom: Rem(1);
    right: Rem(60);
    border-bottom: 1px solid #fff;
  }
  .active{
    border-bottom: 1px solid #2ea141;
    color: #2ea141;
  }
}
</style>
