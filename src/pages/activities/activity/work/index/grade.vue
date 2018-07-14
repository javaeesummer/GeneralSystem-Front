
<template>
      <d2-container type="full">
          <template slot="header">这里是评选结果</template>
                   <el-container>
  <el-header><p  style="width: 100%;height: 45px;display: block;  font-size:50PX;

    color:#555;line-height: 45px;text-align: center;">评选结果</p></el-header>

<el-main>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      label="排名"
      width="180">
    </el-table-column>

    <el-table-column
      prop="name"
      text='center'
      label="获奖作品名称">
    </el-table-column>
  </el-table>
</el-main>
                   </el-container>
                   </d2-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "1"
        },
        {
          name: "1"
        },
        {
          name: "1"
        },
        {
          name: "1"
        }
      ]
    };
  },

  mounted() {
    this.onGet();
  },
  created: function() {
    this.getActivitys();
  },

  methods: {
    onGet() {
      this.$axios({
        methods: "get",
        url: "/xx"
      })

        .then(res => {
          console.log(res);
        })
        .catch(err => {
          //   this.$notify.error({
          //         title: "错误",
          //         message: "这是一条错误的提示消息"
          //       });
        });
    }
  }
};
</script>