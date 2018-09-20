<template>
    <div class="bg-blue">
        <div class="layout">
            <div class="logo">
                <img class="logoImg" :src="logoImg" alt="" />
            </div>

            <el-container>
                <el-header>
                    <el-radio-group class="hygRadioGroup" v-model="regeditType" size="medium">
                        <el-radio-button label="person">个人求职</el-radio-button>
                        <el-radio-button label="enterprise">企业招聘</el-radio-button>
                        <el-radio-button label="trainingOrgan">培训机构</el-radio-button>
                    </el-radio-group>
                </el-header>

                <el-main>
                    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-position="left" label-width="95px">
                        <el-form-item label="手机/邮箱" prop="phone">
                            <el-input placeholder="请输入内容" v-model="ruleForm.phone" auto-complete="off" size="medium"></el-input>
                        </el-form-item>

                        <el-form-item label="验证码" prop="valiCode">
                            <el-input placeholder="请输入内容" v-model="ruleForm.valiCode" auto-complete="off" size="medium" >
                                <el-button slot="append" class="valiCode">
                                    WFGB
                                </el-button>
                            </el-input>
                        </el-form-item>

                        <el-form-item label="短信验证码" prop="smsCode">
                            <el-input placeholder="请输入内容">
                                <el-button class="validCode" slot="append" >发送验证码</el-button>
                            </el-input>
                        </el-form-item>

                        <el-form-item label="密码" prop="passwd">
                            <el-input placeholder="请输入内容" type="password" v-model="ruleForm.passwd" auto-complete="off" size="medium" ></el-input>
                        </el-form-item>

                        <el-form-item label="确认密码" prop="checkPasswd">
                            <el-input placeholder="请输入内容" type="password" v-model="ruleForm.checkPasswd" auto-complete="off" size="medium"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-button @click="" class="entryBtn" type="primary">注册并登录 </el-button>

                    <div class="myrow">
                        <el-checkbox v-model="checked">
                            同意好易工
                        </el-checkbox>
                        <a class="linkBtn" href="#">用户协议及隐私政策</a>
                    </div>

                    <div class="myrow">
                        已有帐号 <a class="linkBtn" href="#">直接登录</a>
                    </div>
                </el-main>
            </el-container>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPasswd !== '') {
                this.$refs.ruleForm.validateField('checkPasswd');
            }
            callback();
            }
        };
        var validateCheckPass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.passwd) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return{
            logoImg:require('@/assets/images/logo01.png'),
            regeditType:'person',
            ruleForm:{
                phone:"",
                valiCode:"",
                smsCode:"",
                passwd:"",
                checkPasswd:""
            },
            rules:{
                phone:[
                    { required: true, message: '请输入电话或邮箱地址', trigger: 'blur' },
                    // { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                valiCode:[
                    {required:true,message:'请正确输入验证码',trigger:'blur'},
                ],
                smsCode:[
                    {required:true,message:'请正确输入短信码',trigger:'blur'},
                ],
                passwd:[
                    { required:true,message:'请输入密码',trigger:'blur'},
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPasswd:[
                    { required:true,message:'请输入密码',trigger:'blur'},
                    { validator: validateCheckPass, trigger: 'blur' }
                ]
            },
            checked:false,
        }
    },
    methods:{
        handleClick(tab,event){
            console.log(tab,event);
        }
    }
}
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
               
    }
    .entryBtn {
        border-radius: 0;
        width: 100%;
        height:(36rem/16);
        margin-bottom: (13rem/16);
        background:#00ACC1;
    }
    .validCode{
        width:(95rem/16);
        text-indent:(-10rem/16);
    }
    .myrow{
        height:(25rem/16);
        line-height:(25rem/16);
        text-align:center;
        font-size:(14rem/16);
        color:#909399;
        .linkBtn{
            color:#00ACC1;
            text-decoration:none;
            margin-left:(10rem/16);
        }
    }
    .el-input{
        /deep/ .el-input__inner{
            border-radius: 0;
        }
    }
    .el-container{
        .el-header, .el-main{
            padding:0;
        }
    }
    .hygRadioGroup{
        /deep/ .el-radio-button__inner{
            border-radius:0;
        }
        .is-active{
            /deep/ .el-radio-button__inner{
                background:#00ACC1;
            }
        }
    }
    
}

</style>
