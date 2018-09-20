<template>
    <div class="chatSide" :class="whichSide">
        <span class="curTime">12:00</span>
        <div class="chathis">
            <img class="linkHead" :src="linkHead" alt="">
            <div class="chatTxt" ><i class="caret toLeft el-icon-caret-left"></i>你好！请问有什么帮到你？<i class="caret toRight el-icon-caret-right"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'chatSide',
    props:['whichSide'],
    data(){
        return{
            linkHead:require('@/assets/images/jobsavatar.png'),
        }
    }
}
</script>

<style lang="scss" scoped>
.chatSide{
    padding:(20rem/16) (25rem/16);
    position: relative;
    display: inline-block;
    width:65%;
    .curTime{
        border-radius:(2rem/16);
        background:#D2D5D9;
        color:#FFF;
        font-size:(12rem/16);
        padding:(5rem/16) (8rem/16);    
        margin-left:(50rem/16);    
    }
    .chathis{
        margin-top:1rem;
        .linkHead{
            width:(40rem/16);
            height:(40rem/16);
            float: left;
        }    
        .chatTxt{
            background:#F2F2F2;
            color:#393D40;
            font-size:(14rem/16);
            padding:(10rem/16) (15rem/16);
            border-radius:(2rem/16);
            margin-left:1rem;
            position: relative;
            display:inline-block;
            max-width:80%;
        }
        .caret{
            position: absolute;
            font-size:(25rem/16);
            &.toLeft{
                color:#F2F2F2;
                left:(-15rem/16);
            }
            &.toRight{
                color:#00ACC1;
                right:(-15rem/16);
                top:(10rem/16);
                display: none;
            }  
        }
    }
    &.localSide{
        float:right;
        text-align:right;
        .curTime{
            margin-left:0;
            margin-right:(50rem/16);
        }
        .linkHead{
            float:right;
        }
        .chatTxt{
            background:#00ACC1;
            margin-left:0;
            margin-right:1rem;
            color:#FFF;
        }
        .caret{
            &.toLeft{
                display:none;
            }
            &.toRight{
                display:block;
            }
        }
    }
}
</style>
