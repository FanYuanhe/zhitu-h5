<template>
  <div class="case-experience">
    <div class="body">
      <div class="item-box">
        <div class="item-label">基本信息</div>
        <div @click="inputPopupVisible = true">
          <mt-cell
            label="标题"
            :value="info.title"
            is-link>
          </mt-cell>
        </div>
        <div @click="selectStartTime()">
          <mt-cell
            label="开始时间"
            :value="info.startDate"
            is-link>
          </mt-cell>
        </div>
        <div @click="selectEndTime()">
          <mt-cell
            label="结束时间"
            :value="info.endDate"
            is-link>
          </mt-cell>
        </div>
      </div>

      <div class="item-box">
        <div class="item-label">描述</div>
        <div class="detail">
          <textarea name="" id="" cols="30" rows="10" v-model="info.detail" placeholder="请填写描述信息"></textarea>
        </div>
      </div>

      <mt-button type="primary" class="btn-default" @click="handleSubmit">保存</mt-button>
    </div>

    <!--弹窗-->
    <mt-datetime-picker
      ref="datePicker"
      v-model="datePickerVisible"
      type="date"
      @confirm="handleConfirmDate">
    </mt-datetime-picker>

    <zt-input-popup :popupVisible.sync="inputPopupVisible" @confirm="saveTitle" title="填写标题"
                    :currentValue="info.title"></zt-input-popup>
  </div>
</template>

<script>
  import { Button, Cell, DatetimePicker } from 'mint-ui'
  import { date } from '@/utils'
  import InputRightPopup from '@/components/modules/input_right_popup.vue'

  export default {
    components: {
      'mt-button': Button,
      'mt-cell': Cell,
      'mt-datetime-picker': DatetimePicker,
      'zt-input-popup': InputRightPopup
    },
    data () {
      return {
        datePickerVisible: false,
        datePickerKey: '',
        info: {
          title: '',
          startDate: '',
          endDate: '',
          detail: ''
        },
        inputPopupVisible: false
      }
    },
    mounted () {
      const self = this
      if (self.$route.query.type && self.$route.query.id) {
        self.axios({
          url: '/api/user/getteacherextend',
          method: 'get',
          params: {
            type: self.$route.query.type,
            id: self.$route.query.id
          }
        }).then((res) => {
          if (res.data.error_code === 0) {
            self.info.title = res.data.data.info.title
            self.info.startDate = res.data.data.info.start_time
            self.info.endDate = res.data.data.info.end_time
            self.info.detail = res.data.data.info.content
          }
        })
      }
    },
    methods: {
      handleConfirmDate: function (value) {
        this.info[this.datePickerKey] = date.format(value, 'yyyy-MM-dd')
      },
      selectStartTime: function () {
        this.datePickerKey = 'startDate'
        this.$refs.datePicker.open()
      },
      selectEndTime: function () {
        this.datePickerKey = 'endDate'
        this.$refs.datePicker.open()
      },
      handleSubmit: function () {
        this.$emit('submit', this.info)
      },
      saveTitle: function (val) {
        this.info.title = val
      }
    }
  }
</script>

<style scoped lang="scss">
  @import 'static/css/mixin';

  .case-experience {
    .item-box {
      margin-top: Rem(10);
      .item-label {
        font-size: 15px;
        height: Rem(30);
        line-height: Rem(30);
        text-indent: Rem(7);
      }
      .detail {
        textarea {
          font-size: 14px;
          border: 0;
          padding: 5%;
          width: 90%;
        }
      }
    }
  }
</style>
