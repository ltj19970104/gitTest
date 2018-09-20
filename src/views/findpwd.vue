<template>
  <div class="bg-blue">
        <div class="layout" :class="{'findPwd':isFindPwd}">
            <div class="tit">密码重置</div>
            <el-form  ref="ruleForm"  :model="ruleForm" :rules="rules" label-position="left" label-width="100px">
                <el-form-item label="手机/邮箱" prop="name"  >
                    <el-input v-model="ruleForm.name" auto-complete="off" size="medium" placeholder="请输入内容"></el-input>
                </el-form-item>               
            </el-form>
            <el-button @click="onFindPwd" class="button" type="primary">发送验证信息</el-button>
        </div>

        <div class="layout" :class="{'authorize':isAuthorize}">
            <div class="tit">身份认证</div>
            <el-form  ref="ruleForm"  :model="ruleForm" :rules="rules" label-position="left" label-width="100px">
                <el-form-item label="验证码" prop="validateCode"  >
                    <el-input v-model="ruleForm.validateCode" auto-complete="off" size="medium" placeholder="请输入内容"></el-input>
                </el-form-item>               
            </el-form>
            <el-button @click="onAuthorize" class="button" type="primary">下一步</el-button>
        </div>

        <div class="layout" :class="{'setPwd':isSetPwd}">
            <div class="tit">重设密码</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon label-position="left" label-width="100px">
                <el-form-item label="新密码" prop="pass"  >
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off" size="medium" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="重复密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" size="medium"  placeholder="请输入内容"></el-input>
                </el-form-item>              
            </el-form>
            <el-button @click="onSubmit" class="button" type="primary">确认</el-button>
        </div>
  </div>
</template>

<script>
export default {
  name: "findpwd",
  data() {
    var validatePass=(rule,value,callback)=>{
        if(value === ''){
            callback(new Error('请输入密码'));
        }else{
            if(this.ruleForm.checkPass !== ''){
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
        }
    };
    var validateCheckPass=(rule,value,callback)=>{
        if(value===''){
            callback(new Error('请再次输入密码'));
        }else if( value !== this.ruleForm.pass ){
            callback(new Error('两次输入密码不一致'));
        }else{
            callback();
        }
    };
    return {
      logoImg:require('@/assets/images/logo01.png'),
      isFindPwd:true,
      isAuthorize:false,
      isSetPwd:false,
      ruleForm: {
          name:"",
          validateCode:"",
          pass:"",
          checkPass:""
      },
      rules: {
        // name: [
        // //   { required: true, message: "请输入手机号/邮箱", trigger: "blur" },
        // //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        // ],
        // validateCode: [
        //   { required: true, message: "请输入验证码", trigger: "blur" },
        // ],
        // pass:[
        //     { required: true, message: "请输入密码", trigger: "blur" },
        //     { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
        //     { validator:validatePass, trigger:'blur' }
        // ],
        // checkPass:[
        //     { validator:validateCheckPass, trigger:'blur' }
        // ]
      }
    };
  },
  methods: {
    onFindPwd(){
        this.$refs.ruleForm.validate(valid=>{
            if(valid){
                this.isFindPwd=false;
                this.isAuthorize=true;
            }else{
                console.log("error submit!!");
                return false;
            }
        })
    },
    onAuthorize(){
        this.$refs.ruleForm.validate((valid)=>{
            if(valid){
                this.isFindPwd=false;
                this.isAuthorize=false;
                this.isSetPwd=true;
            }else {
                console.log("error submit!!");
                return false;
            }
        })
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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
  .layout {
    width: (370rem/16);
    margin: 0 auto;
    box-sizing: border-box;
    padding: (20rem/16) (36rem/16);
    border-radius:(6rem/16);
    background:#FFF;
    display:none;
    .forgetPwd{
      color:#909399;
      font-size:(14rem/16);
      text-decoration: none;
      float:right;
    }
    .tit {
      text-align:left;
      box-sizing: border-box;
      font-size:1rem;
      line-height:(45rem/16);
      color:#393D40;
      margin-bottom:(10rem/16);
    }
    .button {
      border-radius: 0;
      width: 100%;
      height:(36rem/16);
      margin-top: (15rem/16);
      margin-bottom: (13rem/16);
      background:#00ACC1;
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

    &.findPwd{
        display:block;
    }
    &.authorize{
        display:block;
    }
    &.setPwd{
        display:block;
    }
  }
}

.el-input{
    /deep/ .el-input__inner{
        border-radius: 0;
    }
} 
</style>
