<template>
  <div id="headerBar">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#"><img :src="images.logo" alt="" width="78px" height="23px"></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="left-content">
          <b-nav-item href="/">首页</b-nav-item>
          <b-nav-item href="/#/huntingJobs">职位</b-nav-item>
          <b-nav-item href="/#/socialSecurityInfo">公司</b-nav-item>
          <b-nav-item href="/#/myCollection">培训</b-nav-item>
          <b-nav-item href="/#/law">法律法规</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="right-content ml-auto">
          <b-nav-item href="#">我的简历</b-nav-item>
          <b-nav-item href="/#/dropInBox">投递箱</b-nav-item>
          <b-nav-item href="#">收藏夹</b-nav-item>
          <b-nav-text>|</b-nav-text>
          <b-nav-item disabled><i class="iconfont icon-baoguofahuo-xianxing"></i></b-nav-item>
          <b-nav-item disabled><i class="iconfont icon-lingdang-xianxing"></i></b-nav-item>
          <b-nav-item disabled><i class="iconfont icon-yonghu-xianxing"></i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  props: {
    // msg: String
  },
  data() {
    return {
      images:{
        logo: require('../assets/images/logo.png')
      },
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
#headerBar{
  background: #343a40;
  .navbar{
    margin: 0 auto;
    padding: 0.5rem 0;
    width: 1000px;
    .left-content{
      .nav-link{
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 14px;
      }
    }
    .right-content{
      .nav-link{
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        font-size: 16px;
      }
      .navbar-text{
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        vertical-align: text-top;
        // font-size: 20px;
      }
    }
  }
  .navbar-dark .navbar-nav .nav-link{
    color: #fff;
  }
}
</style>
