<template lang="html">
  <div class="lecture-list">
    <template v-for="item in lectureList">
      <div class="lecture-item" :class="item.status=='6'?'status-six':''">
        <p><span class="name">学生:</span><span>{{ item.student_name
 }}</span><span class="status status-wait" v-if="item.status=='4'">等待确认</span><span v-if="item.status=='5'" class="status">已通过</span><span v-if="item.status=='6'" class="status">未通过</span></p>
        <p><span class="name">试讲时间:</span><span>{{ item.start_time }}</span></p>
        <p><span class="name">试讲课程:</span><span>{{ item.course_info }}</span></p>
        <p><span class="name">试讲地点:</span><span>{{ item.address }}</span></p>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'TeacherLectureComponent',
  props: ['lectureList'],
  data () {
    return {}
  },
  methods: {},
  components: {}
}
</script>
<style scoped lang="scss">
  @import 'static/css/mixin';
  .lecture-item {
    margin-top: Rem(10);
    padding: Rem(15);
    background: #fff;
    p {
      font-size: Rem(15);
      padding: Rem(4) 0;
      .name {
        color: #8e8d8d;
        display: inline-block;
        width: Rem(80);
        text-align: left;
      }
      .status {
        color: #2ea141;
        float: right;
      }
      .status-wait {
        color: red;
      }
    }
    .btn-box {
      margin-top: Rem(8);
      font-size: 0;
      .btn {
        margin-right: Rem(10);
        display: inline-block;
        width: Rem(160);
        height: Rem(50);
        text-align: center;
        line-height: Rem(50);
        border: 1px solid #2ea141;
        font-size: Rem(15);
        border-radius: Rem(50);
        color: #2ea141;
      }
      .btn-selected {
        background: #2ea141;
        color: #fff;
      }
    }
  }
  .status-six {
    background: #e7e7e7;
    color: #888;
  }
</style>
