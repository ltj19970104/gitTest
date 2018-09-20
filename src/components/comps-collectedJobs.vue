<template>
    <div class="collectedJobs">
        <div class="division_long"></div>
        <div v-for="item in recruitment" :key="item.name">
            <div v-if="item.collected==true">
                <div class="mainContentClass">
                    <div class="contentDiv1">
                        <div class="lineTextDiv1">
                            <div class="nameText">{{ item.name }}</div>
                            <div class="salaryText">{{ item.salary }}</div>
                        </div>
                        <div class="lineTextDiv2">
                            <div class="addrText">{{ item.address }}</div>
                            <span>|</span>
                            <div class="expReqText">{{ item.expRequirement }}</div>
                            <span>|</span>
                            <div class="eduReqText">{{ item.eduRequirement }}</div>
                        </div>
                        <div class="el_buttonDiv">
                            <el-button plain size="mini" @click="test" style="outline:none">项目管理证</el-button>
                        </div>
                    </div>
                    <div class="contentDiv2">
                        <p class="companyText">{{ item.company }}</p>
                        <div class="lineTextDiv4">
                            <div class="companyTypeText">{{ item.companyType }}</div>
                            <span>|</span>
                            <div>{{ item.companyScale}}</div>
                        </div>
                        <div class="lineTextDiv5">
                            <div class="colorWhiteGrey">在招职位</div>
                            <div class="jobAmountText">{{ item.jobAmount }}</div>
                        </div>
                    </div>
                    <div class="noButtonDiv">
                        <div class="lineTextDiv6">
                            <img :src="item.HRicon" alt="" width="24px" height="24px" style="margin-right:12px">
                            <span class="spanText">{{ item.HRname }}</span>
                            <span class="divide">|</span>
                            <span class="spanText">{{ item.HRposition}}</span>
                            <img :src="iconCommunicate" alt="" width="20px" height="20px" style="margin-right:-2px; margin-bottom:-2px">
                        </div>
                        <div class="lineTextDiv7">
                            <div class="colorGrey_mr8">最后更新</div>
                            <div>{{ item.time }}</div>
                        </div>
                        <div class="lineTextDiv8">
                            <img :src="item.collected ? isCollected : noCollected" alt="" width="16px" height="16px">
                        </div>
                    </div>
                    <div class="buttonDiv">
                        <button class="btnCommunicate" @click="test">沟通</button>
                        <button class="btnCollect" @click="item.collected=false" v-if="item.collected">取消收藏</button>
                        <button class="btnCollect" @click="item.collected=true" v-else>收藏</button>
                    </div>
                </div>
                <div class="division_medium"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'collectedJobs',
    data () {
        return {
            isCollected: require('../assets/images/favorite.png'),
            iconCommunicate: require('../assets/images/floatBtn_communicate.png'),
            recruitment: [
                {
                    name: '建筑现场管理1',
                    salary: '6k-10k',
                    company: '新世纪建设集团',
                    HRname: '李四',
                    HRicon: require('../assets/images/avatar.png'),
                    HRposition: '经理',
                    address: '云城区',
                    expRequirement: '3年以上',
                    eduRequirement: '学历不限',
                    companyType: '互联网',
                    companyScale: '100-200人',
                    time: '2018/02/13',
                    jobAmount: 13,
                    collected: true
                },
                {
                    name: '建筑现场管理2',
                    salary: '6k-10k',
                    company: '新世纪建设集团',
                    HRname: '李四',
                    HRicon: require('../assets/images/avatar.png'),
                    HRposition: '经理',
                    address: '云城区',
                    expRequirement: '3年以上',
                    eduRequirement: '学历不限',
                    companyType: '互联网',
                    companyScale: '100-200人',
                    time: '2018/02/13',
                    jobAmount: 13,
                    collected: true
                },
                {
                    name: '建筑现场管理3',
                    salary: '6k-10k',
                    company: '新世纪建设集团',
                    HRname: '李四',
                    HRicon: require('../assets/images/avatar.png'),
                    HRposition: '经理',
                    address: '云城区',
                    expRequirement: '3年以上',
                    eduRequirement: '学历不限',
                    companyType: '互联网',
                    companyScale: '100-200人',
                    time: '2018/02/13',
                    jobAmount: 13,
                    collected: true
                },
                {
                    name: '建筑现场管理4',
                    salary: '6k-10k',
                    company: '新世纪建设集团',
                    HRname: '李四',
                    HRicon: require('../assets/images/avatar.png'),
                    HRposition: '经理',
                    address: '云城区',
                    expRequirement: '3年以上',
                    eduRequirement: '学历不限',
                    companyType: '互联网',
                    companyScale: '100-200人',
                    time: '2018/02/13',
                    jobAmount: 13,
                    collected: true
                },
                {
                    name: '建筑现场管理5',
                    salary: '6k-10k',
                    company: '新世纪建设集团',
                    HRname: '李四',
                    HRicon: require('../assets/images/avatar.png'),
                    HRposition: '经理',
                    address: '云城区',
                    expRequirement: '3年以上',
                    eduRequirement: '学历不限',
                    companyType: '互联网',
                    companyScale: '100-200人',
                    time: '2018/02/13',
                    jobAmount: 13,
                    collected: true
                }
            ]
        }
    },
    methods: {
        test: function () {
            alert('test')
        }
    }
}

</script>

<style lang="scss" scoped>
.collectedJobs{
    .mainContentClass{
        box-sizing: border-box;
        padding: 32px 32px 26px 32px;
        display: flex;
        align-items: flex-start;
        position:relative;
        .contentDiv1{
            width:240px;
            margin-right:36px;
            .lineTextDiv1{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 16px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                .nameText{
                    height: 16px;
                    font-size: 16px;
                    line-height: 16px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color:#393D40;
                    margin-right:16px;
                }
                .salaryText{
                    height: 16px;
                    font-size: 16px;
                    line-height: 16px;
                    color:#FFA726;
                }
            }
            .lineTextDiv2{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 16px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                .addrText{
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                    color:#737880;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .expReqText{
                    max-width:80px;
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                    color:#737880;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .eduReqText{
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                    color:#737880;
                }
                span{
                    color:rgba(227,228,230,1);
                    margin:0px 8px ;
                }
            }
            .el_buttonDiv{
                text-align: left;
            }
        }
        .contentDiv2{
            width:170px;
            margin-right:36px;
            p.companyText{
                width:160px;
                text-align:left;
                margin-bottom:16px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                height: 16px;
                font-size: 16px;
                line-height: 16px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .lineTextDiv4{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom:16px;
                div{
                    margin-bottom: 0px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                    color:#737880;
                }
                span{
                    color:rgba(227,228,230,1);
                    margin:0px 8px ;
                }
                .companyTypeText{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width:90px
                }
            }
            .lineTextDiv5{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                div{
                    margin-bottom: 0px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                }
                .colorWhiteGrey{
                    color:#909399;
                    margin-right:8px;
                }
                .jobAmountText{
                    color:#00ACC1;
                }
            }
        }
        .noButtonDiv{
            width:150px;
            margin-top:-4px;
            .lineTextDiv6{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height:24px;
                margin-bottom:12px;
                span{
                    margin-right:8px;
                }
                .divide{
                    color:rgba(227,228,230,1);
                }
                .spanText{
                    margin-bottom: 0px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                    color:#393D40;
                }
            }
            .lineTextDiv7{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height:24px;
                margin-bottom:16px;
                div{
                    margin-bottom: 0px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    height: 14px;
                    font-size: 14px;
                    line-height: 14px;
                    color:#737880;
                }
                .colorGrey_mr8{
                    margin-right:8px;
                }
            }
            .lineTextDiv8{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height:16px;
            }
        }
        .buttonDiv{
            display: none;
            width:150px;
            top:32px;
            right:32px;
            text-align: right;
            position: absolute;
            .btnCommunicate{
                width:88px;
                height:36px;
                border:none;
                background-color:#00ACC1;
                color:#FFFFFF;
                text-align:center;
                font-size:14px;
                font-family:PingFangSC-Regular;
                margin-bottom: 22px;
                outline: none;
                cursor: pointer;
            }
            .btnCollect{
                width:88px;
                height:36px;
                border-color:#C6C9CC;
                border-style:solid;
                border-width:1px;
                background-color:#FFFFFF;
                color:#393D40;
                text-align:center;
                font-size:14px;
                font-family:PingFangSC-Regular;
                outline: none;
                cursor: pointer;
            }
            .btnCommunicate:hover{
                background-color:#26BFC6;
            }
            .btnCollect:hover{
                border-color:#26BFC6;
                color:#00ACC1;
            }
            .btnCommunicate:active{
                background-color:rgb(34, 170, 177);
            }
            .btnCollect:active{
                border-color:rgb(34, 170, 177);
                color:rgb(18, 138, 145);
            }
        }
    }
    .mainContentClass:hover{
        background-color: rgb(242,251,252);
        .noButtonDiv{
            display: none;
        }
        .buttonDiv{
            display: inline;
        }
    }
}
.division_long{
  width:100%;
  height:1px;
  background-color:#00ACC1;
}
.division_medium{
  width:638px;
  height:1px;
  background-color:#E3E4E6;
  margin:0 auto;
}
</style>
