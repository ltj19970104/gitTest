<template>
    <div class="enpVerify">
        <div class="cont">
            <div class="lcont">
                <enpNavMenu ></enpNavMenu>
            </div>

            <div class="rcont">
                <div class="rctHead">
                    <div class="tit">帐户管理&nbsp;/&nbsp;企业资质</div>
                    <el-steps class="elSteps" :active="1" >
                        <el-step title="提交资质" ></el-step>
                        <el-step title="资质审核" ></el-step>
                        <el-step title="审核结果" ></el-step>
                    </el-steps>
                    <el-checkbox-group class="elChkGroup" v-model="verifyResults">
                        <el-checkbox label="营业执照"></el-checkbox>
                        <el-checkbox label="社保登记证"></el-checkbox>
                        <el-checkbox label="组织机构代码证"></el-checkbox>
                        <el-checkbox label="经办人身份证"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="rctBody">                    
                    <el-form class="enpForm" :model="verForm" :rules="verRules" ref="verForm"  label-width="80px" label-position="left" >
                        <div class="tit">基本信息</div>
                        <el-form-item label="企业全称" prop="enpName">
                            <el-input v-model="verForm.enpName" size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="企业简称" prop="enpSimName">
                            <el-input v-model="verForm.enpSimName" size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="注册号" prop="enpRegeditNum">
                            <el-input v-model="verForm.enpRegeditNum" size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="公司法人" prop="enpLegalPerson">
                            <el-input v-model="verForm.enpLegalPerson" size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="enpPhone">
                            <el-input v-model="verForm.enpPhone" size="medium"></el-input>
                        </el-form-item>

                        <div class="hline"></div>

                        <div class="tit">证件上传（营业执照、机构代码证、法人身份证）</div>
                        <el-upload class="upload-demo" action="#" multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-upload="beforeRemove"
                            :limit="10" :on-exceed="handleExceed" :file-list="fileList">
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            <el-button class="verifyBtn" size="mini"  >点击上传</el-button>
                        </el-upload>

                        <div class="hline"></div>

                        <div class="tit">经办人</div>
                        <el-form-item label="姓名" prop="operName">
                            <el-input v-model="verForm.operName" size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号" prop="operIdentity">
                            <el-input v-model="verForm.operIdentity" size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="operPhone">
                            <el-input v-model="verForm.operPhone" size="medium"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="operEmail">
                            <el-input v-model="verForm.operEmail" size="medium"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button class="verifyBtn" size="small" >提交审核</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import enpNavMenu from '../comps/comp-enpNavmenu'

export default {
    components:{ enpNavMenu },
    data(){
        return{
            verifyResults:[],
            verForm:{
                enpName:'',
                enpSimName:'',
                enpRegeditNum:'',
                enpLegalPerson:'',
                enpPhone:'',
                operName:'',
                operIdentity:'',
                operPhone:'',
                operEmail:''
            },
            verRules:{
                enpName:[
                    { required: true, message: '请输入企业名称', trigger: 'blur' }
                ],
                enpSimName:[
                    { required: true, message: '请输入企业简称', trigger: 'blur' }
                ],
                enpRegeditNum:[
                    { required: true, message: '请输入企业注册号', trigger: 'blur' }
                ],
                enpLegalPerson:[
                    { required: true, message: '请输入企业法人', trigger: 'blur' }
                ],
                enpPhone:[
                    { required: true, message: '请输入联系电话', trigger: 'blur' }
                ],
                operName:[
                    { required: true, message: '请输入经办人名称', trigger: 'blur' }
                ],
                operIdentity:[
                    { required: true, message: '请输入经办人身份证', trigger: 'blur' }
                ],
                operPhone:[
                    { required: true, message: '请输入经办人电话', trigger: 'blur' }
                ],
                operEmail:[
                    { required: true, message: '请输入经办人邮箱', trigger: 'blur' }
                ]
            },
            fileList:[
                {name:'人社扶贫总表',url:''}
            ]
        }
    },
    methods:{
        handleRemove(file,fileList){
            console.log(file,fileList);
        },
        handlePreview(file){
            console.log(file);
        },
        handleExceed(files,fileList){
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file,fileList){
            console.log(file,fileList)
        }
    }
}
</script>

<style lang="scss" scoped>
.enpVerify{
    background:#F2F2F2;
    display:-webkit-box;
    .cont{
        width:(1000rem/16);
        margin:0 auto;
        padding:(24rem/16) 0;
        .lcont{
            width:(200rem/16);
            float:left;
            height:100%;
            margin-right:(20rem/16);
            background:#393D40;
        }
        .rcont{
            overflow: hidden;
            height:100%;
            background:#FFF;
            color:#505459;
            font-size:(14rem/16);
            .rctHead{
                padding:(28rem/16) (24rem/16);
                border-bottom:(1rem/16) solid #E3E4E6;
                .tit{
                    color: #737880;
                    font-size: (18rem/16);
                    margin-bottom:(30rem/16);                   
                }
                .elSteps{
                    font-size:1rem;
                    margin-bottom:(20rem/16);
                    margin-left:(50rem/16);
                }
                .elChkGroup{
                    font-size:(12rem/16);
                    margin-left:(50rem/16);
                    height: (20rem/16);
                    .el-checkbox{
                        color:#C6C9CC;
                    }
                }
            }
            .rctBody{
                padding:(28rem/16) (48rem/16);
                .enpForm{
                    width:(500rem/16);
                    .tit{
                        font-size: 1rem;
                        margin-bottom:1rem;
                        color:#393D40;
                    }
                    .upload-demo{
                        margin-left:1rem;
                        margin-bottom:1rem;
                    }
                }
            }

        }
    }
}

.hline{
    width:100%;
    height:(1rem/16);
    background-color:#E3E4E6;
    margin-bottom:(20rem/16);
}

.el-button{
    border-radius:0;
    &.verifyBtn{
        background:#00ACC1;
        color:#FFF;
    }
}

</style>
