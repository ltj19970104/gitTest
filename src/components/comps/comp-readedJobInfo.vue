<template>
    <div class="readedJobInfo">
        <div class="hotJ-row">
            <div class="hotJ-tit">全栈开发工程师</div>
            <div class="hotJ-payment">10K-15K</div>
        </div>
        <div class="hotJ-row">
            新世界巨人集团
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.readedJobInfo{
    height:(70rem/16);
    background:#FFF;
    padding:(13rem/16) 1rem;
    border-bottom:(1rem/16) solid #E3E4E6;
    cursor: pointer;
    .hotJ-row{
        line-height:(24rem/16);
        height:(24rem/16);
        font-size:(12rem/16);
        color:#737880;
        .hotJ-tit{
            color:#393D40;
            font-size:1rem;
            text-overflow:ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width:65%;
            float:left;
        }
        .hotJ-payment{
            font-size:(14rem/16);
            color:#FFA726;
            float: right;;
            
        } 
    }
    &:hover{
        background:rgb(242, 251, 252);
    }
}
</style>
