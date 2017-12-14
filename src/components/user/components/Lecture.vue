<template lang="html">
    <div class="content">
        <div class="head">
          <div @click="unfinished" :class="status === '1'?'wei active':'wei'">未开始</div>
          <div  @click="finish" :class="status === '2'?'yi active':'yi'">已结束</div>
        </div>
      <tempalte v-for="item in mainInfo.course" v-if="status === '1'">
        <div class="lecture">
          <div class="lecture_left">
            <p>
              <span class="teacher col">老</span>
              <span class="col">师：</span>
              <span>{{item.teacher_name}}</span>
            </p>
            <p>
              <span class="col">试讲时间：</span>
              <span>{{item.start_time}}</span>
            </p>
            <p>
              <span class="col">试讲课程：</span>
              <span>{{item.course_info}}</span>
            </p>
          </div>
          <div class="lecture_right">
            <p> <span style="color:green">查看老师详情》</span></p>
          </div>
        </div>
      </tempalte>
       <tempalte v-for="item in mainInfo.course" v-if="status === '2'">
         <div class="lecture_no">
          <div class="lecture_left">
            <p>
              <span class="teacher col">老</span>
              <span class="col">师：</span>
              <span>{{item.teacher_name}}</span>
            </p>
            <p>
              <span class="col">试讲时间：</span>
              <span>{{item.start_time}}</span>
            </p>
            <p>
              <span class="col">试讲课程：</span>
              <span>{{item.course_info}}</span>
            </p>
          </div>
          <div class="lecture_right">
            <p> <span style="color:green">查看老师详情》</span></p>
          </div>
        <div class="btn">
          <div class="btn_no">
            试讲不通过
          </div>
          <div class="btn_ok">
            试讲通过
          </div>
        </div>
    </div>
      </tempalte>
    </div>
</template>
<script>
export default {
  name: 'Lecture',
  data () {
    return {
      mainInfo: {},
      status: '1'
    }
  },
  created () {
    this.getData();
  },
  methods: {
    unfinished () {
      this.status = '1';
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
    finish () {
      this.status = '2';
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
    }
  },
  computed: {},
  components: {}
}
</script>
<style scoped lang="scss">
  @import 'static/css/mixin';
    .head {
      height: Rem(50);
      background: #fff;
      position: relative;
      width: 100%;
      .wei {
        font-size: Rem(18);
        text-align: center;
        width: Rem(70);
        height: Rem(30);
        position: absolute;
        bottom: Rem(1);
        left: Rem(60);
      }
      .yi {
        font-size: Rem(18);
        text-align: center;
        width: Rem(70);
        height: Rem(30);
        position: absolute;
        bottom: Rem(1);
        right: Rem(60);
      }
    }
    .lecture {
      height: Rem(110);
      margin-top: Rem(11);
      background: #fff;
      width: 100%;
        .lecture_left{
          float: left;
        }
        .lecture_right{
          float: right;
        }
        p{
          padding: Rem(7.5) Rem(15);
          font-size: Rem(15);
          .look_teacher{
            display: inline-block;
            float: right;
          }
          .col{
            color:#cecece;
          }
          .teacher{
            letter-spacing: Rem(24);
          }
        }
    }
  .lecture_no {
    height: Rem(160);
    margin-top: Rem(11);
    background: #fff;
    width: 100%;
    .lecture_left{
      float: left;
    }
    .lecture_right{
      float: right;
    }
    p{
      padding: Rem(7.5) Rem(15);
      font-size: Rem(15);
      .look_teacher{
        display: inline-block;
        float: right;
      }
      .col{
        color:#cecece;
      }
      .teacher{
        letter-spacing: Rem(24);
      }
    }
    .btn{
      padding: Rem(5) Rem(10);
      font-size: Rem(20);
      position: relative;
      .btn_no{
        position: absolute;
        left: Rem(20);
        top: Rem(105);
        width: Rem(140);
        height: Rem(45);
        line-height: Rem(45);
        text-align: center;
        border: 1px solid green;
        border-radius: Rem(20);
      }
      .btn_ok{
        position: absolute;
        left: Rem(200);
        top: Rem(105);
        width: Rem(140);
        height: Rem(45);
        line-height: Rem(45);
        text-align: center;
        border: 1px solid green;
        border-radius: Rem(20);
      }
    }
  }
  .active{
    border-bottom: 2px solid green;
  }
</style>
