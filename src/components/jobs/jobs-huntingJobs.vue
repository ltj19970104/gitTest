<template>
    <div class="huntingJobs">
        <huntingJobHead ></huntingJobHead>
        <el-container>
            <el-main>
                <div class="">
                    <el-radio-group class="js-radioButton" v-model="huntType" size="small">
                        <el-radio-button label="热门职位"></el-radio-button>
                        <el-radio-button label="推荐职位"></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="huntingJobList">
                    <huntingJobInfo ></huntingJobInfo>
                    <huntingJobInfo ></huntingJobInfo>
                    <huntingJobInfo ></huntingJobInfo>
                    <huntingJobInfo ></huntingJobInfo>
                    <huntingJobInfo ></huntingJobInfo>
                    <huntingJobInfo ></huntingJobInfo>
                    <huntingJobInfo ></huntingJobInfo>
                </div>
            </el-main>

            <el-aside width="200px">
                <div class="asideTit" >看过的职位</div>
                <div class="readedJob">
                    <readedJobInfo></readedJobInfo>
                    <readedJobInfo></readedJobInfo>
                    <readedJobInfo></readedJobInfo>
                    <readedJobInfo></readedJobInfo>
                </div>

                <div class="asideTit" >推荐的职位</div>
                <div class="readedJob">
                    <readedJobInfo></readedJobInfo>
                    <readedJobInfo></readedJobInfo>
                    <readedJobInfo></readedJobInfo>
                    <readedJobInfo></readedJobInfo>
                </div>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import huntingJobInfo from '../comps/comp-huntingJobInfo'
import readedJobInfo from '../comps/comp-readedJobInfo'
import huntingJobHead from '../comps/comp-huntingJobHead'

export default {
    name:'huntingJobs',
    components:{ huntingJobInfo,readedJobInfo,huntingJobHead },
    data(){
        return{
            huntType:'热门职位',
        }
    },
    methods:{
        helo(){
            alert('asdfadsf');
        }
    }
}
</script>

<style lang="scss" scoped>
.huntingJobs{
    background:#F2F2F2;
    .el-container{
        width: (1000rem/16);
        height:100%;
        margin: 0 auto;
        padding-bottom:(20rem/16);
        .el-main{
            margin-right:(20rem/16);
            .huntingJobList{
                border-top:(1rem/16) solid #00ACC1;
                background:#FFF;
                .huntingJobInfo:last-child{
                    /deep/ .el-row{
                        border:none;
                    }
                }
            }
        }
        .el-aside{
            padding:(20rem/16) 0;
            .asideTit{
                color:#00ACC1;
                font-size:1rem;
                line-height: (40rem/16);
            }
            .readedJob{
                border-top:(1rem/16) solid #00ACC1;
                background:#FFF;
                margin-bottom:(20rem/16);
                .readedJobInfo:last-child{
                    border:none;
                }
            }
        }
    }
}

.js-radioButton{
    /deep/ .el-radio-button__inner{
        border-radius:0;
    }
    /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        background:#00ACC1;
    }
}

</style>
