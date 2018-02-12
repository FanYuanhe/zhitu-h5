<template>
  <mt-popup v-model="popupVisible" position="bottom" class="province-city-popup" :closeOnClickModal="false">
    <div class="province-city-popup-operator">
      <span class="left" @click="popupVisible = false">取消</span>
      <span class="right" @click="selectProvinceCity">确定</span></div>
    <mt-picker
      :slots="provinceCitySlots"
      @change="onValuesChange">
    </mt-picker>
  </mt-popup>
</template>

<script>
  import {Popup, Picker} from 'mint-ui'

  export default {
    name: `province-city`,
    components: {
      'mt-picker': Picker,
      'mt-popup': Popup
    },
    props: {},
    data: function () {
      return {
        popupVisible: false,
        provinces: [],
        province: '',
        provinceId: '',
        cities: [],
        city: '',
        cityId: '',
        provinceCitySlots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      }
    },
    watch: {
      'popupVisible': function (val) {
        if (val) {
          this.getProvince()
        }
      }
    },
    methods: {
      showPopup: function () {
        this.popupVisible = true
      },
      getProvince: function () {
        const self = this
        self.axios({
          url: '/cmn/dictionary/province',
          method: 'get',
          params: {
            service_status: 1
          }
        }).then((res) => {
          if (res.data.message === 'success') {
            self.provinces = res.data.data
            for (let i in res.data.data) {
              self.provinceCitySlots[0].values.push(res.data.data[i].province)
            }
          }
        })
      },
      getCity (provinceId = '') {
        const self = this
        let pid
        if (provinceId) {
          pid = provinceId
        } else {
          pid = this.getProvinceId(this.provinceCitySlots[0].values[0])
        }
        if (pid) {
          self.axios({
            url: `/cmn/dictionary/city`,
            method: 'get',
            params: {
              province_id: pid,
              service_status: 1
            }
          }).then(function (res) {
            self.cities = res.data.data
            self.provinceCitySlots[2].values = []
            for (let i in res.data.data) {
              self.provinceCitySlots[2].values.push(res.data.data[i].city)
            }
          })
        }
      },
      // 选择省市
      onValuesChange (picker, values) {
        const province = values[0]
        const city = values[1]
        this.province = values[0]
        this.city = values[1]
        if (province === undefined) {
          this.provinceId = ''
        } else {
          this.provinceId = this.getProvinceId(province)
        }
        if (city === undefined) {
          this.cityId = ''
        } else {
          this.cityId = this.getCityId(city)
        }
        this.getCity(this.provinceId)
      },
      // 通过省的名字获取id
      getProvinceId (provinceName) {
        const provinceData = this.provinces
        for (let i in provinceData) {
          if (provinceName === provinceData[i].province) {
            return provinceData[i].province_id
          }
        }
      },
      // 通过市的名字获取Id
      getCityId (cityName) {
        const cityData = this.cities
        for (let i in cityData) {
          if (cityName === cityData[i].city) {
            return cityData[i].city_id
          }
        }
      },
      // 确定选择省市
      selectProvinceCity () {
        this.popupVisible = false
        this.$emit('select', {
          province: this.province,
          city: this.city,
          provinceId: this.provinceId,
          cityId: this.cityId
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .province-city-popup {
    width: 100%;
    .province-city-popup-operator {
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      font-size: 14px;
      .left {
        float: left;
        margin: 5px 0 0 5px;
      }
      .right {
        float: right;
        margin: 5px 5px 0 0;
      }
    }
    .picker {
      clear: both;
    }
  }
</style>
