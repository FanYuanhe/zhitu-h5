<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import 'static/css/reset';
  html,body {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>
