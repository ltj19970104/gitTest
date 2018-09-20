<template>
     <div class="enpManageJob">
        <div class="cont">
            <div class="lcont">
                <enpNavMenu ></enpNavMenu>
            </div>

            <div class="rcont">
                <div class="rctBody">                    
                    <el-form class="enpForm" :model="verForm" :rules="verRules" ref="verForm"  label-width="80px" label-position="left" >
                        <div class="tit">编辑职位</div>
                        <el-form-item label="职位名称" prop="jobName">
                            <el-input v-model="verForm.jobName" size="medium" placeholder="请输入职位名称"></el-input>
                        </el-form-item>
                        <el-form-item label="行业分类" prop="industryType">
                            <el-select v-model="verForm.industryType" size="medium" placeholder="请选择行业类别">
                                <el-option label="石材行业" value="石材行业"></el-option>
                                <el-option label="打磨工" value="打磨工"></el-option>
                                <el-option label="栽培" value="栽培"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="经验要求" prop="jingyan">
                            <el-select v-model="verForm.jingyan" size="medium" placeholder="请选择经验要求">
                                <el-option label="不限" value="不限"></el-option>
                                <el-option label="1-2年" value="1-2年"></el-option>
                                <el-option label="2-3年" value="2-3年"></el-option>
                                <el-option label="3年以上" value="3年以上"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="学历要求" prop="xueli">
                            <el-select v-model="verForm.xueli" size="medium" placeholder="请选择学历要求">
                                <el-option label="不限" value="不限"></el-option>
                                <el-option label="中专" value="中专"></el-option>
                                <el-option label="大专" value="大专"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="年龄要求" prop="nianling">
                            <el-select v-model="verForm.nianling" size="medium" placeholder="请选择年龄要求">
                                <el-option label="不限" value="不限"></el-option>
                                <el-option label="20岁-30岁" value="20岁-30岁"></el-option>
                                <el-option label="30岁-40岁" value="30岁-40岁"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="上班地址" prop="dizhi">
                            <el-input v-model="verForm.dizhi" size="medium" placeholder="请输入上班地址"></el-input>
                        </el-form-item>
                        <el-form-item label="薪酬要求" prop="xinchou">
                            <el-select v-model="verForm.xinchou" size="medium" placeholder="请选择薪酬要求">
                                <el-option label="面谈" value="面谈"></el-option>
                                <el-option label="4k-5k" value="4k-5k"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="技能要求" prop="jineng">
                            <el-select v-model="verForm.jineng" size="medium" placeholder="请选择技能要求">
                                <el-option label="不限" value="不限"></el-option>
                                <el-option label="中级" value="中级"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="职位描述" prop="zhiweimiaoshu">
                            <el-input type="textarea" v-model="verForm.zhiweimiaoshu" :rows="10" placeholder="请输入内容"></el-input>
                        </el-form-item>

                        <div class="hline"></div>

                        <el-form-item label="有效日期" prop="youxiaoriqi">
                            <el-select v-model="verForm.youxiaoriqi" size="medium" placeholder="请选择有效日期">
                                <el-option label="长久" value="长久"></el-option>
                                <el-option label="1个月" value="1个月"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-checkbox-group v-model="verForm.littleTip">
                                <el-checkbox label="置顶"></el-checkbox>
                                <el-checkbox label="急招"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item style="text-align:right;">
                            <el-button type="text" size="small">暂停招聘</el-button>
                            &nbsp;
                            <el-button size="small">预览职位</el-button>
                        </el-form-item>

                        <div class="hline"></div>

                        <el-form-item style="text-align:right;">
                            <el-button type="text" size="small">删除职位</el-button>
                            &nbsp;
                            <el-button size="small">取消</el-button>
                            &nbsp;
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
            verForm:{
                jobName:'',
                industryType:'',
                jingyan:'',
                xueli:'',
                nianling:'',
                dizhi:'',
                xinchou:'',
                jineng:'',
                zhiweimiaoshu:'',
                youxiaoriqi:'',
                littleTip:[],                
            },
            verRules:{
                jobName:[
                    { required: true, message: '请输入职位名称', trigger: 'blur' }
                ],
                industryType:[
                    { required: true, message: '请选择行业类型', trigger: 'change' }
                ],
                jingyan:[
                    { required:true, message: '请选择经验要求', trigger: 'change' }
                ],
                xueli:[
                    { required:true, message: '请选择学历要求', trigger: 'change' }
                ],
                nianling:[
                    { required:true, message: '请选择年龄要求', trigger: 'change' }
                ],
                dizhi:[
                    { required:true, message: '请输入上班地址', trigger: 'blur' }
                ],
                xinchou:[
                    { required:true, message: '请选择薪酬', trigger: 'change' }
                ],
                jineng:[
                    { required:true, message: '请选择技能要求', trigger: 'change' }
                ],
                zhiweimiaoshu:[
                    { required:true, message: '请描述职位要求', trigger: 'blur' }
                ],
                youxiaoriqi:[
                    { required:true, message: '请选择有效日期', trigger: 'change' }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.enpManageJob{
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
            .rctBody{
                padding:(28rem/16) (48rem/16);
                .enpForm{
                    width:(500rem/16);
                    .tit{
                        font-size: 1rem;
                        margin-bottom:1rem;
                        color:#393D40;
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
