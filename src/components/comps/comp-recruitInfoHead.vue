<template>
    <div class="jobsCompanyHead">
        <div class="container">
            <el-row>
                <el-col :span="10">                    
                    <div class="rowItem fs20">建筑现场管理</div>
                    <div class="rowItem">云城区 <i class="vline"></i>3年以上<i class="vline"></i>不限</div>
                    <div class="rowItem">
                        <ul>
                            <li class="hotJ-TeSe">一级建筑师</li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="14">
                    <img class="cImg" :src="jobslogo" alt="" />                    
                    <div class="rowItem flr">
                        <div class="rowItem fs20">新世纪建设集团</div>
                        <div class="rowItem">互联网<i class="vline"></i>100-200人</div>
                        <div class="rowItem">
                            在招职位 <span class="blue">13</span> &nbsp;&nbsp;<a class="linkBtn" href="javascript:void(0);" @click="dialogEvaluateCompany=true" style="color:#FFF;">评价</a>&nbsp; <el-rate v-model="score" style="float:right;"></el-rate>
                        </div>
                    </div>                    
                </el-col>                
            </el-row>
            <el-row >
                <el-col :span="24" style="text-align:right;">
                    <a class="linkBtn" @click="dialogAccusationCompany=true" href="javascript:void(0);">举报企业 &nbsp;<i class="el-icon-warning"></i></a>
                </el-col>
            </el-row>
        </div>


        <el-dialog title="企业评价" :visible.sync="dialogEvaluateCompany" width="30%" :show-close="false">
            <evaluateCompany ></evaluateCompany>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogEvaluateCompany=false" size="medium">取消</el-button>
                <el-button type="primary" @click="dialogEvaluateCompany=false" size="medium">确定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="举报企业" :visible.sync="dialogAccusationCompany" width="40%" :show-close="false">
            <accusationCompany></accusationCompany>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAccusationCompany=false" size="medium">取消</el-button>
                <el-button type="primary" @click="dialogAccusationCompany=false" size="medium">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import evaluateCompany from '../comps/comp-evaluateCompany'
import accusationCompany from '../comps/comp-accusationCompany'

export default {
  name: 'jobsCompCompanyHead',
  components:{ evaluateCompany,accusationCompany },
  props: ['formDatas'],
  data(){
    return{
      jobslogo: require('../../assets/images/jobslogo.png'),
      jobsfeedback: require('../../assets/images/jobsfeedback.png'),
      score:null,
      dialogEvaluateCompany:false,
      dialogAccusationCompany:false,
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.jobsCompanyHead{
    height:(176rem/16);
    background: #505459;
    .container{
        padding: (36rem/16) 0 (9rem/16);
        width: (1000rem/16);
        margin:0 auto;
        .rowItem{
            margin-bottom:(12rem/16);
            color:#FFF;
            font-size:1rem;
            line-height:(20rem/16);
            &.fs12{
                font-size:(12rem/16);
            }            
            &.fs20{
                font-size:(20rem/16);
            }
            &.flr{
                float:right;
                text-align: right;
                margin-right:(24rem/16);
            }
            
        }
        .cImg{
            width:(80rem/16);
            height:(80rem/16);
            float:right;
        }
        .cInfo{
            float:right;
            margin-left:(32rem/16);
            position: relative;
            height:(80rem/16);
            width:80%;
            .cName{
                font-size:(20rem/16);                
            }
            .cType{
                margin:(10rem/16) 0;
            }
        }
        .cBox{
            float:right;
            height:(80rem/16);
            text-align:center;
            margin-left:(36rem/16);
        }
        ul{
            margin:0;
            padding:0;
            .hotJ-TeSe{
                float:left;
                list-style:none;
                border:(1rem/16) solid #E3E4E6;
                padding:0 (8rem/16);
                font-size:(12rem/16);
                color: #FFF;
                line-height:(28rem/16);
                height:(28rem/16);
                margin-right:(12rem/16);
                border-radius:(5rem/16);
            }
        }
    }
}

.vline{
    background-color:#E3E4E6;
    width:(1rem/16);
    height:(12rem/16);
    margin:0 (9rem/16);
    display:inline-block;
}

span{
    &.blue{
        color:#00ACC1;
    }    
}

a{
    &.linkBtn{
        font-size:(14rem/16);
        color:#909399;
        text-decoration:none;
        cursor: pointer;
    }
}

.el-button{
    border-radius:0;
}

</style>
