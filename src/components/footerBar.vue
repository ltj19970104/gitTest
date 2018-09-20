<template>
  <div id="footerBar">
    <div class="container">
      <span>Copyright&copy;2018 云浮市人力资源和社会保障局&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 京ICP备1234567-8</span>
      <span><img :src="images.logo" alt="" width="39px" height="12px"> &nbsp;&nbsp;服务热线：400-123-4567</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBar',
  props: {
    // msg: String
  },
  data() {
    return {
      images:{
        logo: require('../assets/images/logo.png')
      },
    };
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
#footerBar{
  .container{
    padding: 0;
    width: 1000px;
    height: 40px;
    margin-bottom: 0px;
    span{
      color: #909399;
      font-size: 12px;
      line-height: 40px;
    }
    span:nth-child(2){
      line-height: 40px;
      float: right;
    }
  }
}
</style>
