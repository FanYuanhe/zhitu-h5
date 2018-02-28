<template>
  <mt-popup v-model="popupVisible" position="right" class="zt-input-popup">
    <mt-header :title="title">
      <mt-button icon="back" slot="left" @click="close"></mt-button>
      <mt-button slot="right" @click="save">保存</mt-button>
    </mt-header>
    <mt-field v-model="value" placeholder="请输入..."></mt-field>
  </mt-popup>
</template>

<script>
  import {Popup, Header, Button, Field} from 'mint-ui'

  export default {
    components: {
      'mt-popup': Popup,
      'mt-header': Header,
      'mt-button': Button,
      'mt-field': Field
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      popupVisible: {
        type: Boolean,
        default: false
      },
      currentValue: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        value: this.currentValue
      }
    },
    mounted () {
    },
    methods: {
      close: function () {
        this.$emit('update:popupVisible', false)
      },
      save: function () {
        this.$emit('confirm', this.value)
        this.close()
      }
    }
  }
</script>

<style scoped>
  .zt-input-popup {
    height: 100vh;
    width: 100vw;
  }
</style>
