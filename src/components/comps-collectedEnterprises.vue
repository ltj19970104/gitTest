<template>
    <div class="collectedEnterprises">
        <img class="logo" :src="companyLogo" alt="" width="56px" height="56px">
        <div class="companyInfo">
            <p class="companyName">{{ companyName }}</p>
            <div>
                <span>{{ companyType }}</span>
                <span class="divide">|</span>
                <span>{{ companyScale }}</span>
            </div>
        </div>
        <img class="favorite" :src="collected ? isCollected : noCollected" alt="" width="16px" height="16px">
        <div class="rate">
            <span style="margin-right:4px">评分</span>
            <span v-for="n in 5" :key="n" style="line-height:12px">
                <img :src="(n<=rate) ? starSolid : starHollow" alt="" width="12px" height="12px">
            </span>
        </div>
        <div class="jobAmount">
            <span class="tipText">在招职位</span>
            <span class="jobAmountText">{{ jobAmount }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'collectedEnterprises',
    data () {
        return {
            companyLogo: require('../assets/images/company.png'),
            isCollected: require('../assets/images/favorite.png'),
            starHollow: require('../assets/images/starHollow.png'),
            starSolid: require('../assets/images/starSolid.png'),
            companyName: '新世纪建设集团',
            companyType: '互联网',
            companyScale: '100-200人',
            time: '2018/02/13',
            jobAmount: 13,
            collected: true,
            rate: 4
        }
    }
}
</script>

<style lang="scss" scoped>
.collectedEnterprises{
    box-sizing: border-box;
    width:50%;
    height:140px;
    border: 1px solid rgba(255,255,255,0);
    background-color: #FFFFFF;
    position: relative;
    img.logo{
        box-sizing: content-box;
        position: absolute;
        top:20px;
        left:20px;
    }
    .companyInfo{
        box-sizing: content-box;
        position: absolute;
        top:20px;
        left:92px;
        width:200px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        p{
            box-sizing: content-box;
            height:16px;
            font-size:16px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            text-align: left;
            color:rgba(57,61,64,1);
            line-height:16px;
            max-width:135px;
            margin-bottom: 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span{
            box-sizing: content-box;
            height:14px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(115,120,128,1);
            line-height:14px;
            max-width:100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .divide{
            margin:0px 8px;
            color:#E3E4E6;
        }
    }
    img.favorite{
        position:absolute;
        top:20px;
        right:20px;
    }
    .rate{
        box-sizing: content-box;
        position: absolute;
        bottom:20px;
        left:20px;
        height:14px;
        display:flex;
        align-items: center;
        span{
            box-sizing: content-box;
            height:14px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(115,120,128,1);
            line-height:14px;
            margin-right:0px;
        }
    }
    .jobAmount{
        box-sizing: content-box;
        position: absolute;
        bottom:20px;
        right:20px;
        height:14px;
        display:flex;
        align-items: center;
        span{
            box-sizing: content-box;
            height:14px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            line-height:14px;
        }
        .tipText{
            color:rgba(115,120,128,1);
            margin-right:8px;
        }
        .jobAmountText{
            color:#00ACC1;
        }
    }
    &:hover{
        background-color: rgb(242,251,252);
    }
}
</style>
