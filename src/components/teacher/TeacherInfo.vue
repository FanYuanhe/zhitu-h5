<template>
  <div class="teacher_info">
    <div class="item-box">
      <div class="item-label">基本信息</div>
      <mt-cell label="头像" is-link>
        <img :src="teacherInfo.image" alt="">
      </mt-cell>
      <div @click="inputName()">
        <mt-cell
          label="姓名"
          :value="teacherInfo.realname"
          is-link>
        </mt-cell>
      </div>
      <div @click="selectSex">
        <mt-cell
          label="性别"
          :value="teacherInfo.sex_label.label"
          is-link>
        </mt-cell>
      </div>
      <div @click="inputSchool()">
        <mt-cell
          label="毕业院校"
          :value="teacherInfo.school"
          is-link>
        </mt-cell>
      </div>
      <div @click="inputMajor()">
        <mt-cell
          label="专业"
          :value="teacherInfo.major"
          is-link>
        </mt-cell>
      </div>
      <div @click="selectQualification()">
        <mt-cell
          label="学历"
          :value="teacherInfo.qualification_label.label"
          is-link>
        </mt-cell>
      </div>
    </div>

    <div class="item-box">
      <div class="item-label">教学概况</div>
      <div @click="selectTeacherType()">
        <mt-cell
          label="教师类型"
          :value="teacherInfo.type[0].label"
          is-link>
        </mt-cell>
      </div>
      <div @click="selectTeachGrade()">
        <mt-cell
          label="教授年级"
          :value="teacherInfo.teachGrade"
          is-link>
        </mt-cell>
      </div>
      <div @click="selectSubject()">
        <mt-cell
          label="教授学科"
          :value="teacherInfo.subject[0].label"
          is-link>
        </mt-cell>
      </div>
      <div @click="inputTeachYear()">
        <mt-cell
          label="教龄(年)"
          :value="teacherInfo.teach_year"
          is-link>
        </mt-cell>
      </div>
      <div @click="inputTeachPrice()">
        <mt-cell
          label="期望课酬(元/小时)"
          :value="teacherInfo.realprice"
          is-link>
        </mt-cell>
      </div>
    </div>

    <div class="item-box">
      <div class="item-label">个人简历
        <router-link to="/teacher_info_introduce">
          <div class="edit">编辑</div>
        </router-link>
      </div>
      <div class="introduce">
        <span v-if="teacherInfo.intro">{{teacherInfo.intro | substring(100)}}</span>
      </div>
    </div>


    <!--弹窗-->
    <sex
      ref="sexPopup"
      :closeOnClickModal="true"
      :currentValue="teacherInfo.sex"
      @select="handleSelectSex">
    </sex>
    <tag
      ref="tagPopup"
      :multiple="tagPopupMultiple"
      :type="tagPopupType"
      @select="handleSelectTag"
      :value="tagPopupValue"
      :closeOnClickModal="true">
    </tag>

  </div>
</template>

<script>
  import {Cell, MessageBox} from 'mint-ui'
  import Sex from '../modules/sex_popup'
  import Tag from '../modules/tags_popup'

  export default {
    components: {
      'mt-cell': Cell,
      'sex': Sex,
      'tag': Tag
    },
    data () {
      return {
        teacherInfo: {
          image: '',
          realname: '',
          sex_label: {label: '请选择'},
          school: '',
          major: '',
          qualification: '',
          qualification_label: {label: '请选择'},
          teachGrade: '',
          grade: [{label: '请选择'}],
          subject: [{label: '请选择'}],
          type: [{label: '请选择'}],
          realprice: 0,
          teach_year: 0,
          intro: ''
        },
        tagPopupMultiple: false,
        tagPopupType: '',
        tagPopupKey: '',
        tagPopupValue: 0,
        messageBoxPromptTitle: '',
        messageBoxPromptKey: ''
      }
    },
    mounted () {
      this.getTeacherInfo()
    },
    methods: {
      getTeacherInfo: function () {
        const self = this
        self.axios({
          url: '/api/user/info',
          method: 'get'
        }).then((res) => {
          if (res.data.message === 'success') {
            self.teacherInfo = res.data.data.teacher
            let teachGrade = []
            for (let i in res.data.data.teacher.grade) {
              teachGrade.push(res.data.data.teacher.grade[i].label)
            }
            self.teacherInfo.teachGrade = teachGrade.join(',')
          }
        })
      },
      modifyTeacherInfo: function (params = {}) {
        const self = this
        self.axios({
          url: '/api/user/setteacherinfo',
          method: 'post',
          params: params
        }).then((res) => {
          if (res.data.error_code === 0) {
            self.getTeacherInfo()
          }
        })
      },
      messageBoxPrompt () {
        const self = this
        MessageBox.prompt(self.messageBoxPromptTitle, '').then(({value, action}) => {
          self.modifyTeacherInfo({
            [self.messageBoxPromptKey]: value
          })
        }).catch(() => {
        })
      },
      selectSex: function () {
        this.$refs.sexPopup.showPopup()
      },
      handleSelectSex: function (opt) {
        this.modifyTeacherInfo({sex: opt.value})
      },
      inputName: function () {
        this.messageBoxPromptTitle = '请输入姓名'
        this.messageBoxPromptKey = 'name'
        this.messageBoxPrompt()
      },
      inputSchool: function () {
        this.messageBoxPromptTitle = '请输入毕业院校'
        this.messageBoxPromptKey = 'school'
        this.messageBoxPrompt()
      },
      inputMajor: function () {
        this.messageBoxPromptTitle = '请输入专业'
        this.messageBoxPromptKey = 'major'
        this.messageBoxPrompt()
      },
      selectQualification: function () {
        this.tagPopupType = 'qualification'
        this.tagPopupKey = 'qualification'
        this.$refs.tagPopup.showPopup()
      },
      handleSelectTag: function (opt) {
        if (this.tagPopupMultiple) {
          let ids = []
          for (let i in opt) {
            ids.push(opt[i].id)
          }
          this.modifyTeacherInfo({[this.tagPopupKey]: ids.join(',')})
        } else {
          this.modifyTeacherInfo({[this.tagPopupKey]: opt.id})
        }
        this.tagPopupMultiple = false
      },
      selectTeacherType: function () {
        this.tagPopupType = 'type'
        this.tagPopupKey = 'type'
        this.$refs.tagPopup.showPopup()
      },
      selectTeachGrade: function () {
        this.tagPopupType = 'grade'
        this.tagPopupKey = 'grade'
        this.tagPopupMultiple = true
        this.$refs.tagPopup.showPopup()
      },
      selectSubject: function () {
        this.tagPopupType = 'subject'
        this.tagPopupKey = 'subject'
        this.$refs.tagPopup.showPopup()
      },
      inputTeachYear: function () {
        this.messageBoxPromptTitle = '请输入教龄'
        this.messageBoxPromptKey = 'teach_year'
        this.messageBoxPrompt()
      },
      inputTeachPrice: function () {
        this.messageBoxPromptTitle = '请输入课时费'
        this.messageBoxPromptKey = 'price'
        this.messageBoxPrompt()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import 'static/css/mixin';

  .teacher_info {
    .item-box {
      margin-top: Rem(10);
      .item-label {
        font-size: 15px;
        height: Rem(30);
        line-height: Rem(30);
        text-indent: Rem(7);
        .edit {
          float: right;
          margin-right: Rem(10);
          color: #7c7c7c;
          font-size: 12px;
        }
      }
      .introduce {
        min-height: Rem(30);
        background: #fff;
        padding: Rem(7);
        font-size: 14px;
        line-height: 2;
      }
    }
  }
</style>
