<template>
    <div>
      <TeacherListComponent :teacherList=mainInfo.teacher></TeacherListComponent>
    </div>
</template>
<script>
import TeacherListComponent from './components/TeacherListComponent.vue'
export default {
  name: 'UserCollect',
  data () {
    return {
      mainInfo: [],
      pageOffset: 0
    }
  },
  mounted () {
    this.getData();
  },
  methods: {
    getData () {
      this.axios({
        method: 'get',
        url: '/api/collect/lists',
        params: {
          offset: this.pageOffset,
          limit: 6
        }
      }).then((res) => {
        let dataRes = res.data;
        if (dataRes.message === 'success') {
          this.mainInfo = dataRes.data;
        }
      })
    }
  },
  computed: {},
  components: { TeacherListComponent }
}
</script>
<style scoped>

</style>
