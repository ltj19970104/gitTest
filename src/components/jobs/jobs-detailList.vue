<template>
  <div class="jobsDetailList">
    <div>职位信息</div>
    <hr>
    <ul>
      <li>职位概况</li>
      <li>职位描述</li>
      <li>公司简介</li>
      <li>工商信息</li>
      <li>公司地址</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'jobsDetailList',
  props: ['formDatas'],
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.jobsDetailList{
  padding: 16px 20px;
  width: 200px;
  height: 280px;
  display: inline-block;
  div{
    color: #393D40;
    font-size: 14px;
  }
  hr{
    margin: 15px 0;
    border-top: 1px solid #E3E4E6;
  }
  ul{
    margin: 0;
    padding: 0;
    li{
      margin-bottom: 23px;
      color: #909399;
      font-size: 14px;
      list-style-type: none;
    }
    li:last-child{
      margin: 0;
    }
  }
}
</style>
