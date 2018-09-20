<template>
    <div class="consultHR">
        <div class="lf">
            <img class="headImg" :src="headImg" alt="">
            <span class="hrName">李四 <i class="vline"></i> 经理 &nbsp;<i class="el-icon-message"></i></span>
            <br/>
            <span class="updateTime">最后更新 2018/02/13</span>
        </div>
        <div class="rf">
            <el-button class="consultBtn" >咨询</el-button>
            <br/>
            <span class="rf" style="margin-right:1rem;">收藏 &nbsp;&nbsp;<i class="el-icon-star-on"></i></span>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'consult-hr',
    data(){
        return{
            headImg:require('../../assets/images/jobsavatar.png'),
        }
    }
}
</script>

<style lang="scss" scoped>
.consultHR{
    span{
        color:#737880;
        font-size:(14rem/16);
    }
    .lf{
        float:left;
        .headImg{
            height: (25rem/16);
            width: (25rem/16);
        }
        .hrName{
            margin-left:(15rem/16);
            color:#393D40;
            .vline{
                width:(1rem/16);
                height:(10rem/16);
                display: inline-block;
                margin:0 (5rem/16);
                background-color:#E3E4E6;
            }
        }
        .updateTime{
            margin-left:(40rem/16);
            margin-top:(10rem/16);
        }
    }
    .rf{
        float:right;
    }
    
    .consultBtn{
        width:(113rem/16);
        height:(36rem/16);
        background:#00acc1;
        color:#fff;
        margin-bottom:(18rem/16);
    }
}
</style>

