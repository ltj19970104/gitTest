<template>
  <div class="indexJobsCard">
    <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 16px 20px;">
        <div class="indexJobsCard-one"><span>建筑使用现场管理</span><span>6k-10k</span></div>
        <div class="indexJobsCard-two"><span>云城区 &nbsp;| &nbsp;3年以上 &nbsp;| &nbsp;不限</span><span>02/13</span></div>
        <div class="indexJobsCard-three">
          <span>五险一金</span>
          <span>包吃住</span>
          <span>年终奖金</span>
        </div>
        <div class="indexJobsCard-four">
          <img :src="avatar" width="24px" height="24px" alt="">
          <span>李四 &nbsp;| &nbsp;经理</span>
          <span>新世纪建设集团</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'indexJobsCard',
  props: ['formDatas'],
  data(){
    return{
      avatar: require('../assets/images/avatar.png')
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.indexJobsCard{
  width: 333px;
  height: 180px;
  font-size: 16px;
  display: inline-block;
  .el-card{
    height: 180px;
    .indexJobsCard-one{
      span:nth-child(1){
        color: #393D40;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
      span:nth-child(2){
        color: #FF7043;
        font-size: 16px;
        float: right;
      }
    }
    .indexJobsCard-two{
      margin-top: 5px;
      span:nth-child(1){
        color: #737880;
        font-size: 14px;
      }
      span:nth-child(2){
        color: #C6C9CC;
        font-size: 14px;
        float: right;
      }
    }
    .indexJobsCard-three{
      margin-top: 16px;
      span{
        margin-right: 12px;
        width: 64px;
        height: 28px;
        text-align: center;
        border: 1px solid #E3E4E6;
        color: #909399;
        font-size: 12px;
        line-height: 28px;
        display: inline-block;
      }
    }
    .indexJobsCard-four{
      margin-top: 26px;
      img{

      }
      span{
        margin-left: 16px;
      }
      span:nth-child(2){
        color: #909399;
        font-size: 14px;
      }
      span:nth-child(3){
        color: #737880;
        font-size: 14px;
      }
    }
  }
  .el-card:hover .indexJobsCard-one span:nth-child(1){
    color: #00ACC1;
  }
  .el-card:hover{
    transform: scale(1.1);
  }
}
</style>
