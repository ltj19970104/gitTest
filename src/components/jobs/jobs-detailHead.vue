<template>
  <div class="jobsDetailHead">
    <div class="container">
      <div>
        <p class="jobsDetailHead-one"><span>建筑现场管理</span><span>新世纪建设集团</span></p>
        <p class="jobsDetailHead-two"><span>云城区&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;3年以上&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;不限</span><span>互联网&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;100-200人</span></p>
        <p class="jobsDetailHead-three">
          <span>
            <span>五险一金</span>
            <span>包吃住</span>
            <span>年终奖金</span>
          </span>
          <span>在招职位&nbsp; <span style="margin-right:32px;">13</span> 简历处理率&nbsp; <span>98%</span></span>
        </p>
      </div>
      <img :src="jobslogo" alt="" width="80px" height="80px">
      <p>意见反馈&nbsp;  <img :src="jobsfeedback" alt="" width="16px" height="16px"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jobsDetailHead',
  props: ['formDatas'],
  data(){
    return{
      jobslogo: require('../../assets/images/jobslogo.png'),
      jobsfeedback: require('../../assets/images/jobsfeedback.png')
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.jobsDetailHead{
  height: 176px;
  background: #505459;
  .container{
    padding: 36px 0 9px;
    width: 1000px;
    >div{
      padding-right: 32px;
      width: 920px;
      display: inline-block;
      .jobsDetailHead-one{
        margin-bottom: 11px;
        line-height: 24px;
        span:nth-child(1){
          color: #fff;
          font-size: 20px;
        }
        span:nth-child(2){
          color: #fff;
          font-size: 20px;
          float: right;
        }
      }
      .jobsDetailHead-two{
        margin-bottom: 9px;
        span:nth-child(1){
          color: #fff;
          font-size: 16px;
        }
        span:nth-child(2){
          color: #fff;
          font-size: 14px;
          float: right;
        }
      }
      .jobsDetailHead-three{
        >span:nth-child(1){
          float: left;
          span{
            margin-right: 12px;
            width: 64px;
            height: 28px;
            text-align: center;
            color: #fff;
            font-size: 12px;
            line-height: 26px;
            border: 1px solid #909399;
            border-radius: 5px;
            display: inline-block;
          }
        }
        >span:nth-child(2){
          color: #fff;
          font-size: 14px;
          float: right;
          span{
            color: #00ACC1;
          }
        }
      }
    }
    >img{
      float: right;
    }
    >p{
      margin: 12px 0 0;
      text-align: right;
      color: #909399;
      font-size: 14px;
    }
  }
}
</style>
