<template>
    <div class="hotJobsBox">
        <div class="hotJ-row">
            <div class="hotJ-tit-fs16">{{hotJobs[0].hjTit}}</div>
            <div class="hotJ-payment">{{hotJobs[0].hjPayment}}</div>
        </div>
        <div class="hotJ-row hotJ-tit-fs14">
            {{hotJobs[0].hjArea}}
            <i class="vline"></i>
            {{hotJobs[0].hjAgeLimit}}
            <i class="vline"></i>
            {{hotJobs[0].hjEdu}}
        </div>
        <div class="hotJ-row">
            <ul>
                <li class="hotJ-TeSe" v-for="item in hotJobs[0].hjTeSe">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'jobsHotJobs',
        props: [],
        data(){
            return{
                hotJobs:[
                    {hjTit:"建筑现场管理",hjPayment:"6k-10k",hjArea:"云城区",hjAgeLimit:"3年以上",hjEdu:"不限",hjTeSe:["五险一金","包吃住","年终奖金"]}
                ]
            }
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
    .hotJobsBox{
        background:#fff;
        width:(322rem/16);
        height:(130rem/16);
        padding:(16rem/16) (20rem/16);
        .hotJ-row{
            line-height:(24rem/16);
            height:(24rem/16);
            .hotJ-tit-fs16{
                font-size:1rem;
                color: #393D40;
                float:left;
            }
            .hotJ-payment{
                font-size:1rem;
                color:#FF7043;
                float:right;
            }
            &.hotJ-tit-fs14{
                font-size:(14rem/16);
                color:#737880;
                margin-top:(12rem/16);
                margin-bottom:(14rem/16);
            }
            .vline{
                background-color:#E3E4E6;
                width:(1rem/16);
                height:(12rem/16);
                margin:0 (9rem/16);
                display:inline-block;
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
        }
    }
</style>