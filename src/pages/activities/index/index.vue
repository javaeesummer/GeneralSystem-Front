<template>
  <d2-container type="full">
          <template slot="header">这是活动</template>
            asdasdasd
  <el-table-column
      type="index"
      width="50">
    </el-table-column>
          <router-link :to="{ name: 'activity', params: { activityId: 123 }}">
                <el-button type="primary">活动123</el-button>

            </router-link>

            <router-link :to="{ name: 'activity', params: { activityId: 222 }}">
                <el-button type="primary">活动222</el-button>
            </router-link>

            <router-link :to="{ name: 'activity', params: { activityId: 555  }}">
                <el-button type="primary">活动</el-button>
            </router-link>
    </d2-container>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>


