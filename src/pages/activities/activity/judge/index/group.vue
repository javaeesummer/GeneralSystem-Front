<template>
    <d2-container type="full">
        <template slot="header">这里添加分组</template>

        
<el-button type="primary" @click="dialogVisible = true">添加分组<i class="el-icon-edit el-icon--right"></i></el-button>

<el-dialog
  title="请输入组号"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span><el-input placeholder="请输入内容" v-model="input3">
    <template slot="prepend">组号</template>
  </el-input></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false" v-on:onclik="addgroup()">确 定</el-button>
  </span>
</el-dialog>

<el-table
    :data="tableData4"
    style="width:100%"
   >
    <el-table-column
      fixed
      prop="groupid"
      label="组号"
      width="500px">
    </el-table-column>
 
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
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
          groupid: '1',
     
        }, {
          groupid: '2',
       
        }, {
          groupid: '3',
    
        }]
      };
    },
        mounted() {
    this.onGet();
  },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      addgroup(){
        this.$axios({
        methods: "post",
        url: "/activiname?name=sss"
      })

        .then(res => {
          console.log(res);
        })
        .catch(err => { 
          console.log(err),           
           that.$notify({
          title: '警告',
          message: '添加失败',
          type: 'warning'
        });
        });

      },
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
         groupid: '1',
        },
        {
         groupid: '5',
        },
        {
         groupid: '5',
        },
        {
         groupid: '5',
        }
      ]
        });
    }
    }
    
  };
</script>



<style>
</style>
