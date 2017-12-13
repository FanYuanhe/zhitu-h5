<template>
    <div>
      <TeacherListComponent :teacherList=mainInfo.teacher></TeacherListComponent>
    </div>
</template>
<script>
  import TeacherListComponent from '../../user/components/TeacherListComponent.vue'
  import { Indicator, Toast } from 'mint-ui'
    export default {
        name:'TeacherCollect',
        data() {
            return {
              mainInfo: [],
              pageOffset: 0
            }
        },
        mounted() {
          this.getData();
        },
        methods: {
          getData() {
            this.axios({
              method: 'get',
              url: '/api/collect/lists',
              params: {
                offset: this.pageOffset,
                limit: 6
              }
            }).then((res) => {
              const dataRes = res.data;
              if (dataRes.message === 'success') {
                this.mainInfo = dataRes.data;
              }
            })
          }
        },
          computed: {},
          components: {
            TeacherListComponent
          }
    }
</script>
<style scoped>

</style>
