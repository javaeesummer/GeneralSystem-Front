<template>

  <d2-container type="full">
          <template slot="header">评委主页</template>
          <!-- <router-link :to="{ name: 'activity', params: { activityId: 123 }}"> -->

 
  <router-link :to="{ name: 'activity-judge-group'}">
           <el-button type="primary" >添加分组</el-button>
        </router-link>
    


 <router-link :to="{ name: 'activity-judge-juger'}">
           <el-button type="primary" >添加评委</el-button>
        </router-link>


              <el-table
    :data="tableData"
    border
    style="width: 100%">
   

    <el-table-column
      label="序号"
      type="index"
      align="center"
      width="120"> 
    </el-table-column>

    <el-table-column
      label="评委用户名"
      header-align="center"
      >
      <template slot-scope="scope">
       
        <span style="margin-left: 10px">{{ scope.row.username }}</span>
  
      </template>
    </el-table-column>



     <el-table-column
      label="评委密码"
      header-align="center"
      >
      <template slot-scope="scope">
  
        <span style="margin-left: 10px">{{ scope.row.pwd }}</span>

      </template>
    </el-table-column>
    
     <el-table-column
      label="组号"
      header-align="center"
      >
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.groupid }}</span>
      
      </template>
    </el-table-column>

     <el-table-column
      label="备注"
      header-align="center"
      >
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.other }}</span>
      
      </template>
    </el-table-column>


 <!-- <el-table-column label="修改" width="120" align="center">

      <template slot-scope="scope">
      <router-link :to="{ name: 'activity-judge-modjuger'}">
        <el-button
          size="mini"
          type="warning"
          >评委信息</el-button>
           </router-link>
      </template>
     
    </el-table-column> -->

    <el-table-column label="操作" width="120" align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" v-on:click="deleteActivitys()">删除</el-button>
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
        
          username: '张三',
          pwd:123456,
          groupid:1
        }, {
    
        username: '李四',
         pwd:123456,
         groupid:4
        }, {
       
        username: '王五',
         pwd:123456,
         groupid:3
        }, {
     
        username: '孙李',
         pwd:123456,
        groupid:4
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


