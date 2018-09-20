<template>
  <div class="jobsCompanyEnv">
    <div>公司环境</div>
    <img :src="jobscompanyenv" alt="" width="200px" height="152px">
  </div>
</template>

<script>
export default {
  name: 'jobsCompanyEnv',
  props: ['formDatas'],
  data(){
    return{
      jobscompanyenv: require('../../assets/images/jobscompanyenv.png'),
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.jobsCompanyEnv{
  width: 200px;
  height: 200px;
  display: inline-block;
  div{
    padding: 0 20px;
    color: #393D40;
    font-size: 14px;
    line-height: 48px;
  }
}
</style>
