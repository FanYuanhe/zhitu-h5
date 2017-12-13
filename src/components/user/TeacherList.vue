<template lang="html">
  <div class="teachers-list" v-if="mainInfo" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="20" infinite-scroll-immediate-check="false">
    <div class="search-bar">
      <span :class="moduleSelected=='grade'?'module-selected':'module'" data-module="grade" @click="searchModule($event)">{{ gradeText }}<i></i></span>
      <span :class="moduleSelected=='subject'?'module-selected':'module'" data-module="subject" @click="searchModule($event)">{{ subjectText }}<i></i></span>
      <span :class="moduleSelected=='type'?'module-selected':'module'" data-module="type" @click="searchModule($event)">{{ typeText }}</span>
    </div>
    <TeacherListComponent :teacherList=teacherListData></TeacherListComponent>
    <div class="tips" v-if="isShowTips" @click="hideTips">
      <div class="search-select-box">
        <template v-for="item in moduleList">
          <span class="select-item" @click.stop="clickModuleItem(item)" :class="item.selected?'module-item-selected':''">{{ item.label }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherListComponent from './components/TeacherListComponent.vue'
import { Indicator, Toast } from 'mint-ui'
export default {
  name: 'TeacherList',
  data () {
    return {
      moduleList: [],
      moduleSelected: null,
      isClickedModuleItem: false,
      mainInfo: {},
      condition: '',
      teacherListData: [],
      pageOffset: 0,
      isShowTips: false,
      searchSubject: this.$router.history.current.params.id,
      searchType: null,
      searchGrade: null,
      isLoading: false,
      gradeText: '年级',
      subjectText: '学科',
      typeText: '教师类型'
    }
  },
  mounted () {
    this.getTeacherList()
  },
  methods: {
    getTeacherList () {
      var that = this;
      that.axios({
        url: `/api/teacher/lists`,
        method: 'get',
        params: {
          grade: that.searchGrade,
          type: that.searchType,
          subject: that.searchSubject,
          offset: that.pageOffset,
          limit: 6
        }
      }).then((res) => {
        const dataRes = res.data;
        if (dataRes.message === 'success') {
          if (!dataRes.data.teacher.length || dataRes.data.teacher.length < 6) {
            this.isLoading = true;
            Toast({
              message: '已经加载全部',
              position: 'middle',
              duration: 2000
            });
          }
          dataRes.data.condition.grade.forEach((item) => {
            item.type = 'grade';
            item.selected = false;
          });
          dataRes.data.condition.subject.forEach((item) => {
            item.type = 'subject';
            item.selected = false;
          })
          dataRes.data.condition.type.forEach((item) => {
            item.type = 'type';
            item.selected = false;
          })
          this.mainInfo = dataRes.data;
          if (this.condition === '') {
            this.condition = dataRes.data.condition;
          }
          this.teacherListData = this.teacherListData.concat(dataRes.data.teacher);
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
    searchModule (e) {
      const moduleSelected = e.target.getAttribute('data-module');
      this.isShowTips = true;
      this.moduleSelected = moduleSelected;
      if (moduleSelected === 'grade') {
        this.moduleList = this.condition.grade;
      };
      if (moduleSelected === 'type') {
        this.moduleList = this.condition.type;
      };
      if (moduleSelected === 'subject') {
        this.moduleList = this.condition.subject;
      };
    },
    clickModuleItem (item) {
      console.log(item)
      this.condition.grade.forEach((item) => {
        item.selected = false;
      });
      this.condition.subject.forEach((item) => {
        item.selected = false;
      })
      this.condition.type.forEach((item) => {
        item.selected = false;
      })
      if (item.type === 'grade') {
        this.searchGrade = item.id;
        this.gradeText = item.label;
        item.selected = true;
      }
      if (item.type === 'type') {
        this.searchType = item.id;
        this.subjectText = item.label;
        item.selected = true;
      }
      if (item.type === 'subject') {
        this.searchSubject = item.id;
        this.typeText = item.label;
        item.selected = true;
      }
      this.teacherListData = [];
      this.isClickedModuleItem = true;
      this.isShowTips = false;
      this.pageOffset = 0;
      this.getTeacherList();
    },
    hideTips () {
      this.isShowTips = false;
      this.isClickedModuleItem = false;
      this.moduleSelected = null;
    },
    loadMore () {
      this.pageOffset += 6;
      Indicator.open({
        spinnerType: 'fading-circle'
      });
      setTimeout(() => {
        this.getTeacherList();
        Indicator.close();
      }, 2500);
    }
  },
  components: { TeacherListComponent }
}
</script>

<style lang="scss">
  @import 'static/css/mixin';
  .teachers-list {
    margin-top: Rem(45);
    .search-bar {
      font-size: 0;
      width: 100%;
      height: Rem(35);
      position: fixed;
      top: 0;
      z-index: 999;
      background: #fff;
      span {
        position: relative;
        display: inline-block;
        width: 33.333%;
        text-align: center;
        color: #040000;
        line-height: Rem(35);
        font-size: Rem(14);
        i {
          position: absolute;
          right: 0;
          top: Rem(7.5);
          display: inline-block;
          height: Rem(20);
          width: 1px;
          background: #dde2f0;
        }
      }
      .module:after{
        position:absolute;
        right: Rem(33);
        top: Rem(15);
        border-left:4px solid transparent;
        border-right:4px solid transparent;
        border-top:4px solid #040000;
        content:" ";
        display:block;
        width:0;
        height:0
      }
      span:nth-of-type(3):after {
        right: Rem(20);
      }
    }
  }
  .tips {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    .search-select-box {
      font-size: 0;
      position: fixed;
      top: Rem(35);
      width: 100%;
      padding: Rem(2) 2%;
      background: #fff;
      border-top: 1px solid #dde2f0;
      .select-item {
        display: inline-block;
        width: 20%;
        text-align: center;
        margin: Rem(4) 2%;
        height: Rem(40);
        line-height: Rem(40);
        background: #f5f5f5;
        color: #333;
        font-size: Rem(14);
        border-radius: Rem(4);
      }
    }
  }
  .module-selected, .module-item-selected {
    color: #52c644 !important;
  }
  .module-selected:after{
    position:absolute;
    right: Rem(33);
    top: Rem(15);
    border-left:4px solid transparent;
    border-right:4px solid transparent;
    border-top:4px solid #52c644;
    content:"";
    display:block;
    width:0;
    height:0
  }

</style>
