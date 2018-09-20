<template>
    <div class="huntingJobInfo">
        <el-row>
            <el-col :span="10">
                <div class="hotJ-row">
                    <div class="hotJ-tit-fs16">全栈开发工程师</div>
                    <div class="hotJ-payment">10K-15K</div>
                </div>
                <div class="hotJ-row">
                    云城区
                    <i class="vline"></i>
                    3年以上
                    <i class="vline"></i>
                    学历不限
                </div>
                <div class="hotJ-row btm">
                    <ul>
                        <li class="hotJ-TeSe" >中级计软证</li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="hotJ-row">
                    <div class="hotJ-tit-fs16">巨人集团</div>
                </div>
                <div class="hotJ-row">
                    互联网
                    <i class="vline"></i>
                    100-200人
                </div>
                <div class="hotJ-row btm">
                    在招职位 13
                </div>
            </el-col>
            <el-col :span="7" style="text-align:right;">
                <el-button class="contactBtn" size="small">咨询</el-button>
                <div class="contacthr">
                    <div class="hotJ-row">
                        <img class="headImg" :src="headImg" alt="">
                        李四<i class="vline"></i>经理
                    </div>
                    <div class="hotJ-row">
                        更新日期 2018/09/09
                    </div>
                </div>                
                <div class="hotJ-row">
                    <i class="el-icon-star-off" ></i>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headImg: require('../../assets/images/jobsavatar.png'),
        }
    }
}
</script>

<style lang="scss" scoped>
.huntingJobInfo{
    height:(150rem/16);
    padding:(25rem/16) (32rem/16);    
    .el-row{
        border-bottom:(1rem/16) solid #E3E4E6;
        .hotJ-row{
            line-height:(24rem/16);
            height:(24rem/16);
            font-size:(14rem/16);
            color:#737880;
            margin-bottom:(10rem/16);
            .headImg{
                width:(24rem/16);
                height:(24rem/16);
                margin-right:(12rem/16);
            }
            .hotJ-tit-fs16{
                font-size:1rem;
                color: #393D40;
                float:left;
            }
            .hotJ-payment{
                font-size:1rem;
                color:#FFA726;
                float:left;
                margin-left:1rem;
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
                    color: #909399;
                    line-height:(28rem/16);
                    height:(28rem/16);
                    margin-right:(12rem/16);
                    border-radius:(5rem/16);
                }
            }
            &.btm{
                margin-bottom:(30rem/16);
            }            
        }
    }
    .contactBtn{
        background:#00ACC1;
        color:#FFF;
        border-radius: 0;
        margin-bottom:(10rem/16);
        display:none;
    }
    &:hover{
        background:rgb(242, 251, 252);
        .contacthr{
            display:none;
        }
        .contactBtn{
            display:inline-block;
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
</style>

