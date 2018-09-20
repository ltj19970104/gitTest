<template>
  <div class="jobsMainDetail">
    <div class="jobsMainDetail-one">
      <p>
        <span>最后更新 2018/01/24</span>
        <button><i class="iconfont icon-liuyan"></i>咨询</button>
        <button>投简历</button>
      </p>
      <div>
        <div>
          <img :src="jobsavatar" alt="" width="48px" height="48px">
          <div>
            <p>李四</p>
            <p>经理 | 刚刚在线</p>
          </div>
        </div>
        <span>收藏 <img :src="jobslike" alt="" width="16px" height="16px"></span>
      </div>
    </div>
    <hr>
    <div class="jobsMainDetail-two">
      <div class="title">职位描述</div>
      <div>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章</div>
    </div>
    <div class="jobsMainDetail-three">
      <div class="title">公司简介</div>
      <div>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章</div>
    </div>
    <div class="jobsMainDetail-four">
      <div class="title">工商信息</div>
      <div>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章</div>
    </div>
    <div class="jobsMainDetail-five">
      <div class="title">公司地址</div>
      <img :src="jobsmap" alt="" width="480px" height="253px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'jobsMainDetail',
  props: ['formDatas'],
  data(){
    return{
      jobsavatar: require('../../assets/images/jobsavatar.png'),
      jobslike: require('../../assets/images/jobslike.png'),
      jobsmap: require('../../assets/images/jobsmap.png'),
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.jobsMainDetail{
  width: 780px;
  padding: 40px;
  display: inline-block;
  .jobsMainDetail-one{
    >p{

    }
    >div{

    }
  }
  .jobsMainDetail-two{
    
  }
  .jobsMainDetail-three{
    
  }
  .jobsMainDetail-four{
    
  }
  .jobsMainDetail-five{
    
  }
}
</style>
