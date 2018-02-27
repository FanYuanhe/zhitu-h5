<template>
  <mt-popup v-model="popupVisible" class="tags-popup" :closeOnClickModal="closeOnClickModal">
    <div class="popup-body">
      <div v-for="t in tags[type]" class="tags-item" @click="select(t)" :class="{'selected': selected(t)}">
        {{t.label}}
      </div>
    </div>
    <div class="footer">
      <div class="cancel item" @click="closePopup()">取消</div>
      <div class="confirm item" @click="handleSubmit()">确认</div>
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
      multiple: {
        type: Boolean,
        default: true
      },
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
        tags: {},
        tagSelected: null
      }
    },
    methods: {
      showPopup: function () {
        this.popupVisible = true
        this.tagSelected = null
        this.getTags()
      },
      closePopup: function () {
        this.popupVisible = false
      },
      selected: function (t) {
        if (this.multiple) {
          const tags = this.tagSelected
          for (let i in tags) {
            if (tags[i].id === t.id) {
              return true
            }
          }
          return false
        } else {
          return this.tagSelected && this.tagSelected.id === t.id
        }
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
        if (this.multiple) {
          if (!this.tagSelected) {
            this.tagSelected = []
            this.tagSelected.push(t)
          } else {
            const tags = this.tagSelected
            for (let i in tags) {
              if (tags[i].id === t.id) {
                tags.splice(i, 1)
                return
              }
            }
            this.tagSelected.push(t)
          }
        } else {
          this.tagSelected = {}
          this.tagSelected = t
        }
      },
      handleSubmit: function () {
        this.$emit('select', this.tagSelected)
        this.closePopup()
      }
    }
  }
</script>

<style scoped lang="scss">
  .tags-popup {
    width: 75%;
    .popup-body {
      padding: 10px;
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
    .footer {
      border-top: 1px solid #7c7c7c;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        &.cancel {
          border-right: 1px solid #7c7c7c;
        }
        flex: 1;
        text-align: center;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
</style>
