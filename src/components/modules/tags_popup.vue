<template>
  <mt-popup v-model="popupVisible" class="tags-popup" :closeOnClickModal="closeOnClickModal">
    <div v-for="t in tags[type]" class="tags-item" @click="select(t)" :class="{'selected': selected(t)}">
      {{t.label}}
    </div>
  </mt-popup>
</template>

<script>
  import {Popup} from 'mint-ui'

  export default {
    name: `tags_popup`,
    components: {
      'mt-popup': Popup
    },
    props: {
      type: {
        type: String,
        required: true
      },
      value: {
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
        popupVisible: false,
        tags: {}
      }
    },
    methods: {
      showPopup: function () {
        this.popupVisible = true
        this.getTags()
      },
      closePopup: function () {
        this.popupVisible = false
      },
      selected: function (t) {
        return t.id === this.value
      },
      getTags: function () {
        const self = this
        self.axios({
          url: '/api/app/c',
          method: 'get'
        }).then((res) => {
          if (res.data.message === 'success') {
            self.tags = res.data.data.tags
          }
        })
      },
      select: function (t) {
        this.$emit('select', t)
        this.closePopup()
      }
    }
  }
</script>

<style scoped lang="scss">
  .tags-popup {
    padding: 10px;
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    .tags-item {
      padding: 5px;
      background: #c8c8cd;
      margin: 5px;
      border-radius: 5px;
      font-size: 14px;
      &.selected {
        background: #007aff;
      }
    }
  }
</style>
