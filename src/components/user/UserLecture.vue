<template lang="html">
  <div class="my-lecture">
    <div class="head">
      <div class="ready" :class="status=='1'?'active':''" @click="clickReady">未开始</div>
      <div class="over" :class="status=='2'?'active':''" @click="clickOver">已结束</div>
    </div>
    <LectureListComponent :lectureList=mainInfo.course></LectureListComponent>
  </div>
</template>

<script>
import LectureListComponent from './components/LectureListComponent.vue'
export default {
  name: 'UserLecture',
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
        url: '/api/coursetrial/studentlists',
        methods: 'get',
        params: {
          status: this.status
        }
      }).then((res) => {
        const dataRes = res.data;
        if (dataRes.error_code === 0) {
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
  components: { LectureListComponent }
}
</script>

<style scoped lang="scss">
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
