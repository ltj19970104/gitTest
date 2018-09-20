<template>
    <div class="jobsCompanyHead">
        <div class="container">
            <el-row>
                <el-col :span="18">
                    <img class="cImg" :src="jobslogo" alt="" />                    
                    <div class="cInfo">
                        <span class="cName">新世纪建设集团</span>
                        <span class="cType">互联网&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;100-200人</span>
                    </div>
                    
                </el-col>
                <el-col :span="6">
                    <div class="cBox">
                        <span class="fs40 color-blue">98%</span><br/>
                        <span>简历处理率</span>
                    </div>
                    <div class="cBox">
                        <span class="fs40 color-blue">13</span><br/>
                        <span>在招职位</span>
                    </div>                    
                </el-col>
            </el-row>
            <el-row style="margin-top:1.875rem;">
                <el-col :span="18">
                    <span class="fs14 color-blue">公司档案</span>
                    &nbsp;&nbsp;&nbsp;
                    <span class="fs14">招聘职位 (13) </span>
                </el-col>
                <el-col :span="6" style="text-align:right;">
                    <span class="fs14 color-gray">意见反馈 &nbsp;<i class="el-icon-warning"></i></span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  name: 'jobsCompCompanyHead',
  props: ['formDatas'],
  data(){
    return{
      jobslogo: require('../../assets/images/jobslogo.png'),
      jobsfeedback: require('../../assets/images/jobsfeedback.png')
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
        span{color:#FFF;font-size:1rem;
            &.fs14{
                font-size:(14rem/16);
            }
            &.fs40{
                font-size:(40rem/16);
            }
            &.color-blue{
                color:#00ACC1;
            }
            &.color-gray{
                color:#909399;
            }
        }
        .cImg{
            width:(80rem/16);
            height:(80rem/16);
            float:left;
        }
        .cInfo{
            float:left;
            margin-left:(32rem/16);
            position: relative;
            height:(80rem/16);
            width:80%;
            .cName{
                font-size:(20rem/16);                
            }
            .cType{
                position: absolute;
                left:0;
                bottom:(10rem/16);
            }
        }
        .cBox{
            float:right;
            height:(80rem/16);
            text-align:center;
            margin-left:(36rem/16);
        }
    }
}

</style>
