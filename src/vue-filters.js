import Vue from 'vue'

Vue.filter('substring', function (value, length) {
  if (value.length > length) {
    return value.substring(0, length) + '...'
  }
})
