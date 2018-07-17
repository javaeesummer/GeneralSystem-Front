<template>

  <d2-container type="full">
          <template slot="header">参赛者主页


              <div class="search">
             
                  <el-col :span="6">
                <el-input type="text" class="searchBox" v-model="input" placeholder="请输入搜索内容"></el-input>
                  </el-col>
                 <el-button type="primary" @click="onSearch()">搜索</el-button>
            </div>
          </template>
    <el-table
    :data="tableData"
    border
    style="width: 100%">

        <el-table-column
      label="比赛编号"
      header-align="center"
      >
      <template slot-scope="scope">
       
        <span style="margin-left: 10px">{{ scope.row.attendorId }}</span>
  
      </template>
    </el-table-column>

    <el-table-column
      label="活动ID"
      header-align="center"
      >
      <template slot-scope="scope">
       
        <span style="margin-left: 10px">{{ scope.row.activityId}}</span>
  
      </template>
    </el-table-column>

        <el-table-column
      label="联系方式"
      header-align="center"
      >
      <template slot-scope="scope">
       
        <span style="margin-left: 10px">{{ scope.row.phoneNum }}</span>
  
      </template>
    </el-table-column>



     <el-table-column
      label="票数"
      header-align="center"
      >
      <template slot-scope="scope">
  
        <span style="margin-left: 10px">{{ scope.row.voteNum }}</span>

      </template>
    </el-table-column>
    
     <el-table-column
      label="最终结果"
      header-align="center"
      >
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.endResult }}</span>
      
      </template>
    </el-table-column>
      
     <el-table-column
      label="状态"
      header-align="center"
      >
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.status }}</span>
      
      </template>
    </el-table-column>

     <el-table-column
      label="组号"
      header-align="center"
      >
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.groupId }}</span>
      
      </template>
    </el-table-column>
         <el-table-column
      label="用户Id"
      header-align="center"
      >
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.userID }}</span>
      
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

    <!-- <el-table-column label="操作" width="120" align="center">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" v-on:click="deleteActivitys()">删除</el-button>
      </template>
    </el-table-column> -->
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

    onSearch(){
          this.$axios({
        methods: "get",
        url: "/xx"
      })

        .then(res => {
          console.log(res);
   
        })
        .catch(err => {
          
            this.$notify.warning({
                  title: "提醒",
                  message: "没有搜索项"
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


