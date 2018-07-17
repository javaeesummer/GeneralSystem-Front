<template>
    <d2-container type="full">
        <template slot="header">这里修改评委信息</template>

        




<el-table
    :data="tableData4"
    style="width:50%"
    max-height="250">
    <el-table-column
      fixed
      prop="username"
      label="账户名"
      width="150">
    </el-table-column>

      <el-table-column
      fixed
      prop="pwd"
      label="密码"
      width="150">
    </el-table-column>

    <el-table-column
      fixed
      prop="groupid"
      label="组号"
      width="150">
    </el-table-column>

  </el-table>
    </d2-container>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,

         tableData4: [{
         username: '',
         pwd:'',
         groupid:''
     
        }, {
          username: '',
         pwd:'',
         groupid:''
       
        }, {
        username: '',
         pwd:'',
         groupid:''
    
        }]
      };
    },
     mounted() {
    this.onGet();
  },

    methods: {
     
       onGet() {
      this.$axios({
        methods: "post",
        url: "/xx"
      })

        .then(res => {
          console.log(res);
        })
        .catch(err => {
        

        this.tableData4= [
        {
           username: 'admin',
         pwd:'123456',
         groupid:'1'
        },
        {
          username: 'admin',
         pwd:'123456',
         groupid:'1'
        },
        {
         username: 'admin',
         pwd:'123456',
         groupid:'1'
        },
        {
           username: 'admin',
         pwd:'123456',
         groupid:'1'
        }
      ]
        });
    }


    }

    
    
  };
</script>



<style>
</style>
