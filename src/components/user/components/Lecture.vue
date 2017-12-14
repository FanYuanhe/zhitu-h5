<template>
    <div class="content">
      <div class="head">
        <div class="wei">未开始</div>
        <div class="yi">已结束</div>
      </div>
      <div class="lecture">
        <div class="lecture_left">
          <p>
            <span>老师：</span>
            <span>张老师</span>
          </p>
          <p>
            <span>试讲时间：</span>
            <span>12月1日</span>
          </p>
          <p>
            <span>试讲课程：</span>
            <span>初三英语</span>
          </p>
        </div>
          <div class="lecture_right">
            <p> <span>查看老师详情》</span></p>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      flag: 'true'
    }
  },
  methods: {},
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
      margin-top: Rem(11);
      height: Rem(110);
      width: 100%;
      background: #fff;
      .lecture_left{
        float: left;
      }
      .lecture_right{
        float: right;
      }
      p{
        padding: Rem(5) Rem(15);
        font-size: Rem(15);
        .look_teacher{
          display: inline-block;
          float: right;
        }
        span:nth-of-type(1){
          word-spacing: Rem(2);
          color:#cecece;
          text-align: right;
        }
        span:nth-of-type(4){
          color:#cecece;
        }
        span:nth-of-type(6){
          color:#cecece;
        }
      }
    }
</style>
