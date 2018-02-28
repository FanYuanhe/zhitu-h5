<template>
  <mt-popup v-model="popupVisible" class="sex-popup" :closeOnClickModal="closeOnClickModal">
    <mt-radio
      v-model="value"
      :options="options" @input="handleSelect" title="选择性别">
    </mt-radio>
  </mt-popup>
</template>

<script>
  import {Popup, Radio} from 'mint-ui'

  export default {
    name: `sex`,
    components: {
      'mt-popup': Popup,
      'mt-radio': Radio
    },
    props: {
      currentValue: {
        type: Number,
        default: 0
      },
      closeOnClickModal: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        value: String(this.currentValue),
        popupVisible: false,
        options: [{
          label: '男',
          value: '1'
        }, {
          label: '女',
          value: '2'
        }]
      }
    },
    methods: {
      showPopup () {
        this.popupVisible = true
      },
      closePopup () {
        this.popupVisible = false
      },
      getLabel (val) {
        for (let i in this.options) {
          if (this.options[i].value === val) {
            return this.options[i].label
          }
        }
      },
      handleSelect: function (item) {
        this.closePopup()
        this.$emit('select', {
          label: this.getLabel(item),
          value: item
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .sex-popup {
    width: 60%;
  }
</style>
