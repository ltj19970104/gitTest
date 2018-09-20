<template>
  <div class="indexCompanyCard">
    <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 16px;">
        <div class="indexCompanyCard-one"><img :src="company" alt="" width="56px" height="56px"></div>
        <div class="indexCompanyCard-two">
          <div>新世纪建设集团</div>
          <div>互联网 &nbsp;| &nbsp;100-200人</div>
        </div>
        <div class="indexCompanyCard-three">
          <span>在招职位 <span>13</span></span>
          <span>简历处理率 <span>98%</span> </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'indexCompanyCard',
  props: ['formDatas'],
  data(){
    return{
      company: require('../assets/images/company.png')
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.indexCompanyCard{
  width: 250px;
  height: 136px;
  font-size: 16px;
  display: inline-block;
  .el-card{
    height: 136px;
    .indexCompanyCard-one{
      float: left;
    }
    .indexCompanyCard-two{
      margin-left: 20px;
      display: inline-block;
      div:nth-child(1){
        margin-bottom: 6px;
        color: #393D40;
        font-size: 16px;
        font-weight: 600;
      }
      div:nth-child(2){
        color: #737880;
        font-size: 14px;
      }
    }
    .indexCompanyCard-three{
      margin-top: 28px;
      span:nth-child(1){
        vertical-align: top;
        color: #909399;
        font-size: 14px;
        span{
          color: #00ACC1;
        }
      }
      span:nth-child(2){
        color: #909399;
        font-size: 14px;
        // line-height: 14px;
        float: right;
        span{
          color: #00ACC1;
        }
      }
    }
  }
  .el-card:hover .indexCompanyCard-two div:nth-child(1){
    color: #00ACC1;
  }
  .el-card:hover{
    transform: scale(1.1);
  }
}
</style>
