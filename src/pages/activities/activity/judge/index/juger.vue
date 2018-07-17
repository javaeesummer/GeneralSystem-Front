<template>
    <d2-container type="full">
        <template slot="header">这里添加评委</template>
    
        
<el-button type="primary" @click="dialogVisible = true">添加评委<i class="el-icon-edit el-icon--right"></i></el-button>

<el-dialog
  title="请添加评委账号和密码"
  :visible.sync="dialogVisible"
  width="50%"
  :before-close="handleClose">
  <span><el-input placeholder="请输入内容" v-model="input3">
    <template slot="prepend">账号</template>
  </el-input></span>

 <span><el-input placeholder="请输入内容" v-model="input4">
    <template slot="prepend">密码</template>
  </el-input></span>
  <div>
    <h3>请选择类型</h3>
     <el-select v-model="value" placeholder="请选择">
     
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>

 

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary"  @click="addjuger()">确 定</el-button>
  </span>
</el-dialog>

<el-table
    :data="tableData4"
    style="width:100%"
  >
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
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],

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
       addjuger() {
      this.$axios({
        methods: "get",
        url: "/xx"
      })

        .then(res => {
          console.log(res);
          this.dialogVisible = false
        })
        .catch(err => {
          
            this.$notify.error({
                  title: "错误",
                  message: "添加失败"
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
