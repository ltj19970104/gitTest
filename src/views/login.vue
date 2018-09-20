<template>
  <div class="bg-blue">
        <div class="login-main bg-white">
            <div class="logo">
                <img class="logoImg" :src="logoImg" alt="" />
            </div>
            <el-form  ref="ruleForm"  :model="form" :rules="rules" label-position="left" label-width="100px">
                <el-form-item label="手机/邮箱" prop="name"  >
                    <el-input v-model="form.name" auto-complete="off" size="medium"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" >
                    <el-input type="password" v-model="form.password" auto-complete="off" size="medium"></el-input>
                    <a class="forgetPwd" href="#/findpwd" >忘记密码</a>
                </el-form-item>
                
            </el-form>
            <el-button @click="onSubmit" class="button" type="primary">登录 </el-button>

            <div class="zhuceBox">
              没有帐号 <a class="zhuceBtn" href="#/regedit">立即注册</a>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      logoImg:require('@/assets/images/logo01.png'),
      form: {
          name:"",
          password:""
      },
      rules: {
        name: [
          { required: true, message: "请输入手机号/邮箱", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-blue {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background:#00ACC1;
  .login-main {
    width: (370rem/16);
    height: (390rem/16);
    margin: 0 auto;
    box-sizing: border-box;
    padding: (20rem/16) (36rem/16);
    border-radius:(6rem/16);
    .forgetPwd{
      color:#909399;
      font-size:(14rem/16);
      text-decoration: none;
      float:right;
    }
    .logo {
      height: (100rem/16);
      text-align:center;
      vertical-align: center;
      box-sizing: border-box;
      padding: (30rem/16);
      .logoImg{
        width:(110rem/16);
      }
    }
    .button {
      width: 100%;
      height:(36rem/16);
      margin-bottom: (13rem/16);
      background:#00ACC1;
      border-radius: 0;
    }
    .zhuceBox{
      text-align:center;
      font-size:(14rem/16);
      color:#909399;
      .zhuceBtn{
        color:#00ACC1;
        text-decoration:none;
      }
    }
  }
}
.el-input{
    /deep/ .el-input__inner{
        border-radius: 0;
    }
} 
</style>
