<template>
<d2-container type="full" scroll >
          <template slot="header">活动创建</template>

<el-form ref="form" :model="form" label-width="80px">

  <el-form-item prop="activity_name" label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
 
  <el-form-item prop="activity_intro" label="活动描述">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>

  <el-form-item prop="activity_time" label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.dateA1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.dateA2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>

  <el-form-item prop="activity_endtime" label="截止报名">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.dateB1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.dateB2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>

  <el-form-item prop="activity_judgeTime" label="评审时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.dateC1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.dateC2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>

    <el-form-item  style="width:350px"  label="是否需要提交作品">
    <el-radio-group v-model="form.resource1">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>


    <el-form-item style="width:350px"  label="是否需要进行投票">
    <el-radio-group v-model="form.resource2">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item prop="activity_prePeople" label="期望人数">
    <el-input  style="width:100px"  type="textarea" v-model="form.people"></el-input>
  
  </el-form-item >



  
  
 
  <el-form-item>
           
    <el-button  type="primary" @click="onSubmit">立即创建</el-button>
        
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </d2-container>

</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "这里填写活动名称",
        desc: "本次活动主要目的...",
        dateA1: "2018-05-03",
        dateA2: "",
        dateB1: "2018-05-04",
        dateB2: "",
        dateC1: "2018-05-03",
        dateC2: "",
        resorce1: "",
        resorce2: "",
        people: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 开始请求登录接口
          this.$axios({
            method: "post",
            url: "/create",
            data: this.form
          })
            .then(res => {
              this.$notify({
                title: "成功",
                message: "这是一条成功的提示消息",
                type: "success"
              });
              this.$router.push({
                name: "activities-index"
              });
            })
            .catch(err => {
              this.$notify.error({
                title: "错误",
                message: "这是一条错误的提示消息"
              });
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
