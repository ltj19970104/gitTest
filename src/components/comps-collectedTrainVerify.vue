<template>
    <div class="collectedTrainVerify">
        <div class="division_long"></div>
        <div v-for="item in train" :key="item.name">
            <div v-if="item.collected==true">
                <div class="mainContentClass">
                    <div class="contentClass1">
                        <p>{{ item.name }}</p>
                        <div>
                            <span>费用</span>
                            <span class="divide">|</span>
                            <span>{{ item.fee }}</span>
                        </div>
                    </div>
                    <div class="contentClass2">
                        <div>
                            <p class="value">{{ item.duration }}</p>
                            <p class="key">培训课时</p>
                        </div>
                        <div class="divide_long"></div>
                        <div>
                            <p class="value">{{ item.numOfPeople }}</p>
                            <p class="key">报名人数</p>
                        </div>
                        <div class="divide_long"></div>
                        <div>
                            <p class="value" style="color:#00ACC1">{{ item.deadline }}</p>
                            <p class="key">截止报名</p>
                        </div>
                    </div>
                    <img :src="isCollected" alt="" width="16px" height="16px">
                    <div class="buttonDiv">
                        <button class="btnCommunicate">沟通</button>
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
    name: 'collectedTrainVerify',
    data () {
        return {
            isCollected: require('../assets/images/favorite.png'),
            train: [
                {
                    name: '爱上挖卡萨丁克拉克森大家好',
                    fee: '￥120（政府补贴）',
                    duration: '30小时',
                    numOfPeople: '12/20',
                    deadline: '15天后',
                    collected: true
                },
                {
                    name: '拉黑谁哦阿斯兰的话洗尘',
                    fee: '￥120（政府补贴）',
                    duration: '30小时',
                    numOfPeople: '12/20',
                    deadline: '15天后',
                    collected: true
                },
                {
                    name: '平时代嘎嘣脆借款方好',
                    fee: '￥120（政府补贴）',
                    duration: '30小时',
                    numOfPeople: '12/20',
                    deadline: '15天后',
                    collected: true
                },
                {
                    name: '法制科读入高端客户TV',
                    fee: '￥120（政府补贴）',
                    duration: '30小时',
                    numOfPeople: '12/20',
                    deadline: '15天后',
                    collected: true
                },
                {
                    name: '亚工程部找你领害怕苦而忽视',
                    fee: '￥120（政府补贴）',
                    duration: '30小时',
                    numOfPeople: '12/20',
                    deadline: '15天后',
                    collected: true
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.collectedTrainVerify{
    .mainContentClass{
        box-sizing: border-box;
        padding: 32px;
        height: 110px;
        display: flex;
        align-items: center;
        position:relative;
        .contentClass1{
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: space-between;
            justify-content: flex-start;
            margin-right:40px;
            p{
                box-sizing: border-box;
                height:16px;
                font-size:16px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                text-align: left;
                color:rgba(57,61,64,1);
                line-height:16px;
                max-width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 16px;
            }
            div{
                text-align: left;
                span{
                    box-sizing: border-box;
                    height:14px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(115,120,128,1);
                    line-height:14px;
                }
                .divide{
                    color:rgba(227,228,230,1);
                    margin: auto 8px;
                }
            }
        }
        .contentClass2{
            display: flex;
            height:42px;
            p.value{
                box-sizing: border-box;
                height:20px;
                font-size:20px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(115,120,128,1);
                line-height:20px;
                margin-bottom: 8px;
            }
            p.key{
                box-sizing: border-box;
                height:14px;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(144,147,153,1);
                line-height:14px;
            }
            .divide_long{
                width:1px;
                height:40px;
                margin:0px 24px;
                background:rgba(227,228,230,1);
            }
        }
        img{
            position: absolute;
            top:32px;
            right:32px;
        }
        .buttonDiv{
            display: none;
            width:90px;
            top:15px;
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
                margin-bottom: 8px;
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
        img{
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
