<template>
  <d2-container type="full">
          <template slot="header">这是所有的活动</template>
          <!-- <router-link :to="{ name: 'activity', params: { activityId: 123 }}"> -->
              <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      label="活动标识"
      align="center"
      width="120">
      <template slot-scope="scope">
          <router-link :to="{ name: 'activity', params: { activityId: scope.row.id }}">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column
      label="活动内容"
      header-align="center"
      >
      <template slot-scope="scope">
        <router-link :to="{ name: 'activity', params: { activityId: scope.row.id }}">
        <span style="margin-left: 10px">{{ scope.row.info }}</span>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="120" align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" v-on:click="deleteActivitys()">删除活动</el-button>
      </template>
    </el-table-column>
  </el-table>
    </d2-container> 
</template>
<script>
export default {
    data() {
      return {
        tableData: []
      }
    },
    created:function(){
      this.getActivitys();
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      deleteActivitys(){
            var that=this;
      that.$axios.post('/user', {
        id:'scope.row.id'
  })
  .then(function (response) {
    console.log(response);
    this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success'
        });
  })
  .catch(function (error) {
    console.log(error);
    that.$notify({
          title: '警告',
          message: '删除失败',
          type: 'warning'
        });
  });
    },
      getActivitys(){
        var that=this;
        this.$axios.get('/user?ID=12345')
  .then(function (response) {
  
    console.log(response);
  })
  .catch(function (error) {
      var  tableData1= [{
          id: '1',
          info: '王小虎'
        }, {
          id: '2',
          info: '王小虎'
        }, {
          id: '3',
          info: '王小虎'
        }, {
          id: '4',
          info: '王小虎'
        }];
        that.tableData=tableData1;
    console.log(that.tableData);
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


