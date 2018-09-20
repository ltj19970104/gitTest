<template>
    <div class="consultJobs">
        <div class="layout" :style="{height:layoutHeight}">
            <div class="l-box">
                <div class="header">
                    30天内联系人
                </div>
                <div class="l-box-scroll">
                    <LinkmanComp />
                    <LinkmanComp />
                    <LinkmanComp />
                    <LinkmanComp />
                </div>                
            </div>

            <div class="r-box">
                <div class="header">
                    <span class="mediumTxt">平脑力奖国活动</span>
                    <span class="mediumTxt ostandColor">6k-10k</span>
                    <span>云城区<i class="vline"></i>3年以上<i class="vline"></i>学历不限</span>
                    <el-button class="rfloat" size="small">项目管理证</el-button>
                </div>

                <div class="cont">
                    <div class="chatScroll">
                        <SideChat ></SideChat>
                        <SideChat whichSide="localSide"></SideChat>
                        <SideChat whichSide="localSide"></SideChat>
                    </div>
                    
                    <div class="bmcont">
                        <div class="tools">
                            <el-tooltip content="投递简历" placement="top">
                                <i class="iconBtn el-icon-tickets"></i>
                            </el-tooltip>
                            <el-tooltip content="发送电话号码" placement="top">
                                <i class="iconBtn el-icon-mobile-phone"></i>
                            </el-tooltip>
                            <el-tooltip content="收藏企业" placement="top">
                                <i class="iconBtn el-icon-star-off"></i>
                            </el-tooltip>
                            <el-tooltip content="屏蔽企业" placement="top">
                                <i class="iconBtn el-icon-circle-close-outline"></i>
                            </el-tooltip>
                        </div>

                        <el-input class="chatWin" type="textarea" :autosize="{minRows:2,maxRows:4}" placeholder="请输入内容">

                        </el-input>

                        <div class="sendBox">
                            Enter键发送，Ctrl+Enter键 
                            <el-button class="sendBtn" size="small" >发送</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LinkmanComp from '../comps/comp-linkman';
import SideChat from '../comps/comp-sideChat';

export default {
    name:'consultJobs',
    components:{ LinkmanComp,SideChat },
    data(){
        return{
            layoutHeight:(window.innerHeight-57-40)+'px'
        }
    }
}
</script>

<style lang="scss" scoped>
.consultJobs{
    background: #e3e4e6;
    width: 100%;
    .layout{
        width: (1000rem/16);
        margin: 0 auto;
        padding:(24rem/16) 0;
        .l-box{
            width:(355rem/16);
            height:100%;
            float:left;
            margin-right:(25rem/16);
            background:#fff;
            position: relative;
            .l-box-scroll{
                position: absolute;
                top:(64rem/16);
                bottom: 0;
                width:100%;
                overflow-y:auto;
            }
        }
        .r-box{
            overflow: hidden;
            height:100%;
            background:#FFF;
            position: relative;
            .cont{
                position: absolute;
                top:(64rem/16);
                bottom:0;
                width:100%;
                .chatScroll{
                    height:70%;
                    width:100%;
                    overflow-y:auto;
                }
                .bmcont{
                    float:left;
                    width:100%;
                    height:30%;
                    border-top:(1rem/16) solid #E3E4E6;
                    .tools{
                        margin:(20rem/16) (24rem/16);
                        .iconBtn{
                            margin-left:(20rem/16);
                            font-size:(20rem/16);
                            color:#909399;
                            cursor: pointer;
                            &.el-icon-circle-close-outline{
                                color:#F56C6C;
                            }
                        }
                    }
                    .chatWin{
                        /deep/ .el-textarea__inner{
                            border:none;
                            resize: none;
                        }
                    }
                    .sendBox{
                        position: absolute;
                        bottom:(24rem/16);
                        width:100%;
                        text-align:right;
                        padding-right:(24rem/16);
                        color:#C6C9CC;
                        font-size:(14rem/16);
                        .sendBtn{
                            background:#00ACC1;
                            color:#fff;
                            margin-left:(24rem/16);
                        }
                    }
                }
            }
        }
        .header{
            height:(64rem/16);
            line-height:(64rem/16);
            color:#737880;
            font-size:(14rem/16);
            padding:0 (24rem/16);
            border-bottom:(1rem/16) solid #E3E4E6;
            .mediumTxt{
                color:#393D40;
                font-size:1rem;
                &.ostandColor{
                    color:#FFA726;
                    margin:0 (40rem/16) 0 1rem;
                }
            }
        }
    }
    .vline {
        background-color: #e3e4e6;
        width: (1rem/16);
        height: (12rem/16);
        margin: 0 (9rem/16);
        display: inline-block;
    }
    .rfloat{
        float:right;
        margin-top:1rem;
    }
}

</style>
