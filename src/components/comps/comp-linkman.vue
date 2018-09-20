<template>
    <div class="linkman">
        <img class="manImg" :src="linkHead">
        <span class="manName" >二妞</span>
        <span class="manCompany">同济药业 <i class="vline"></i> 经理</span>

        <span class="time">22:00</span>
    </div>
</template>

<script>
export default {
    name:'linkman',
    data(){
        return{
            linkHead:require('@/assets/images/jobsavatar.png'),
        }
    }
}
</script>

<style lang="scss" scoped>
.linkman{
    height:(96rem/16);
    padding:(24rem/16) (20rem/16);
    color:#909399;
    font-size:(14rem/16);
    position: relative;
    &:hover{
        background:rgb(242, 251, 252)
    }
    cursor: pointer;
    .manImg{
        height:(48rem/16);
        width:(48rem/16);
        margin-right:1rem;
        float:left;
    }
    .manName{
        font-size:1rem;
        color:#393D40;
        position: absolute
    }
    .manCompany{
        position: absolute;
        top:(50rem/16);
    }
    .vline {
        background-color: #e3e4e6;
        width: (1rem/16);
        height: (12rem/16);
        margin: 0 (9rem/16);
        display: inline-block;
    }
    .time{
        float:right;

    }
}

</style>
