<template>
  <d2-container type="full">
          <template slot="header">活动信息</template>
          <!-- <router-link :to="{ name: 'activity', params: { activityId: 123 }}"> -->

<div style="margin: 20px;"></div>

<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="活动名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="活动地点">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="活动详情">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  
  <!-- <router-link :to="{ name: 'activity-work-index'}">
           <el-button type="primary">查看活动作品</el-button>
   </router-link> -->

</el-form>
    </d2-container> 
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    mounted () {
      this.onGet();
    },
    methods: {
      onGet() {
          this.$axios({
          methods: "get",
          url: '/xx'
        }).then(res => {
            this.formLabelAlign.name = res.data.name,
            this.formLabelAlign.region=res.data.region,
            this.formLabelAlign.type=res.data.type
            
        })
        .catch(err => {
             this.formLabelAlign.name='111',

            this.formLabelAlign.region='2',
            this.formLabelAlign.type='3'
            });
        
      }
    }
  }
</script>
<style lang="scss" scoped>
@media (min-width: 576px) {
  // 根据你的需要在这里添加样式
}
@media (min-width: 768px) {
  // 根据你的需要在这里添加样式
}
@media (min-width: 992px) {
  // 根据你的需要在这里添加样式
}
// 在大于1920分辨率的时候
@media (min-width: 1921px) {
}
</style>


