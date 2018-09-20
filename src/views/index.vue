<template>
  <div id="index">   
    <div class="container">
      <div id="index-navSearch">
        <el-menu class="el-menu-vertical-demo" :collapse="true">
          <el-submenu index="1" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">生产</span>
              <div class="bCrumb">
                <span>车工</span><span>/</span>
                <span>后料</span><span>/</span>
                <span>版师</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="1-1">JAVA</el-menu-item>
              <el-menu-item index="1-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="1-3">HTML5</el-menu-item>
              <el-menu-item index="1-4">Android</el-menu-item>
              <el-menu-item index="1-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="1-6">JavaScript</el-menu-item>
              <el-menu-item index="1-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">技术</span>
              <div class="bCrumb">
                <span>JAVA</span><span>/</span>
                <span>PHP</span><span>/</span>
                <span>C++</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="2-1">JAVA</el-menu-item>
              <el-menu-item index="2-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="2-3">HTML5</el-menu-item>
              <el-menu-item index="2-4">Android</el-menu-item>
              <el-menu-item index="2-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="2-6">JavaScript</el-menu-item>
              <el-menu-item index="2-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">产品</span>
              <div class="bCrumb">
                <span>产品总监</span><span>/</span>
                <span>产品经理</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="3-1">JAVA</el-menu-item>
              <el-menu-item index="3-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="3-3">HTML5</el-menu-item>
              <el-menu-item index="3-4">Android</el-menu-item>
              <el-menu-item index="3-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="3-6">JavaScript</el-menu-item>
              <el-menu-item index="3-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">设计</span>
              <div class="bCrumb">
                <span>UI设计</span><span>/</span>
                <span>交互设计</span><span>/</span>
                <span>网页设计</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="4-1">JAVA</el-menu-item>
              <el-menu-item index="4-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="4-3">HTML5</el-menu-item>
              <el-menu-item index="4-4">Android</el-menu-item>
              <el-menu-item index="4-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="4-6">JavaScript</el-menu-item>
              <el-menu-item index="4-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">运营</span>
              <div class="bCrumb">
                <span>新媒体运营</span><span>/</span>
                <span>编辑</span><span>/</span>
                <span>数据运营</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="5-1">JAVA</el-menu-item>
              <el-menu-item index="5-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="5-3">HTML5</el-menu-item>
              <el-menu-item index="5-4">Android</el-menu-item>
              <el-menu-item index="5-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="5-6">JavaScript</el-menu-item>
              <el-menu-item index="5-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">市场</span>
              <div class="bCrumb">
                <span>业务</span><span>/</span>
                <span>渠道</span><span>/</span>
                <span>推广</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="6-1">JAVA</el-menu-item>
              <el-menu-item index="6-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="6-3">HTML5</el-menu-item>
              <el-menu-item index="6-4">Android</el-menu-item>
              <el-menu-item index="6-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="6-6">JavaScript</el-menu-item>
              <el-menu-item index="6-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">职能</span>
              <div class="bCrumb">
                <span>行政</span><span>/</span>
                <span>财务</span><span>/</span>
                <span>审计</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="7-1">JAVA</el-menu-item>
              <el-menu-item index="7-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="7-3">HTML5</el-menu-item>
              <el-menu-item index="7-4">Android</el-menu-item>
              <el-menu-item index="7-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="7-6">JavaScript</el-menu-item>
              <el-menu-item index="7-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="11" :show-timeout="10" :hide-timeout="10">
            <template slot="title">
              <span class="work-type">金融</span>
              <div class="bCrumb">
                <span>投资</span><span>/</span>
                <span>融资</span><span>/</span>
                <span>并购</span><span>/</span>
                <span>风控</span>
              </div>
              <i class="el-icon-arrow-right"></i>
            </template>
            <el-menu-item-group>
              <span slot="title">后端开发</span>
              <el-menu-item index="11-1">JAVA</el-menu-item>
              <el-menu-item index="11-2">PHP</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">移动开发</span>
              <el-menu-item index="11-3">HTML5</el-menu-item>
              <el-menu-item index="11-4">Android</el-menu-item>
              <el-menu-item index="11-5">IOS</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">前端开发</span>
              <el-menu-item index="11-6">JavaScript</el-menu-item>
              <el-menu-item index="11-7">U3D</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <div class="more-jobs-dropDown">
            <el-menu-item index="8" class="more-jobs">
              <span>更多职位</span>
            </el-menu-item>
            <el-submenu index="9" :show-timeout="10" :hide-timeout="10">
              <template slot="title">
                <span class="work-type">职能</span>
                <div class="bCrumb">
                  <span>行政</span><span>/</span>
                  <span>财务</span><span>/</span>
                  <span>审计</span>
                </div>
                <i class="el-icon-arrow-right"></i>
              </template>
              <el-menu-item-group>
                <span slot="title">后端开发</span>
                <el-menu-item index="9-1">JAVA</el-menu-item>
                <el-menu-item index="9-2">PHP</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <span slot="title">移动开发</span>
                <el-menu-item index="9-3">HTML5</el-menu-item>
                <el-menu-item index="9-4">Android</el-menu-item>
                <el-menu-item index="9-5">IOS</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <span slot="title">前端开发</span>
                <el-menu-item index="9-6">JavaScript</el-menu-item>
                <el-menu-item index="9-7">U3D</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="10" :show-timeout="10" :hide-timeout="10">
              <template slot="title">
                <span class="work-type">职位</span>
                <div class="bCrumb">
                  <span>行政</span><span>/</span>
                  <span>财务</span><span>/</span>
                  <span>审计</span>
                </div>
                <i class="el-icon-arrow-right"></i>
              </template>
              <el-menu-item-group>
                <span slot="title">后端开发</span>
                <el-menu-item index="10-1">JAVA</el-menu-item>
                <el-menu-item index="10-2">PHP</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <span slot="title">移动开发</span>
                <el-menu-item index="10-3">HTML5</el-menu-item>
                <el-menu-item index="10-4">Android</el-menu-item>
                <el-menu-item index="10-5">IOS</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <span slot="title">前端开发</span>
                <el-menu-item index="10-6">JavaScript</el-menu-item>
                <el-menu-item index="10-7">U3D</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="12" :show-timeout="10" :hide-timeout="10">
              <template slot="title">
                <span class="work-type">职能</span>
                <div class="bCrumb">
                  <span>行政</span><span>/</span>
                  <span>财务</span><span>/</span>
                  <span>审计</span>
                </div>
                <i class="el-icon-arrow-right"></i>
              </template>
              <el-menu-item-group>
                <span slot="title">后端开发</span>
                <el-menu-item index="12-1">JAVA</el-menu-item>
                <el-menu-item index="12-2">PHP</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <span slot="title">移动开发</span>
                <el-menu-item index="12-3">HTML5</el-menu-item>
                <el-menu-item index="12-4">Android</el-menu-item>
                <el-menu-item index="12-5">IOS</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <span slot="title">前端开发</span>
                <el-menu-item index="12-6">JavaScript</el-menu-item>
                <el-menu-item index="12-7">U3D</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
        <div class="navSearch">
          <b-input-group>
            <b-dropdown text="地区" variant="outline-info" slot="prepend">
              <b-dropdown-item>广州</b-dropdown-item>
              <b-dropdown-item>深圳</b-dropdown-item>
            </b-dropdown>
            <b-form-input placeholder="搜索职位、公司"></b-form-input>
            <b-dropdown text="职位类型" variant="outline-info" slot="append">
              <b-dropdown-item>技术</b-dropdown-item>
              <b-dropdown-item>设计</b-dropdown-item>
            </b-dropdown>
            <b-dropdown text="公司行业" variant="outline-info" slot="append">
              <b-dropdown-item>电子商务</b-dropdown-item>
              <b-dropdown-item>社交网络</b-dropdown-item>
            </b-dropdown>
            <b-btn variant="info" slot="append"><i class="el-icon-search"></i></b-btn>
          </b-input-group>
          <div class="hotSearch">
            <span>热门职位：</span>
            <a href="" v-for="item in hotSearchJobs" :key="item.index">{{item}}</a>
          </div>
          <div class="ad">
            <img :src="images.ad" alt="" width="682px" height="300px">
          </div>
        </div>
        <!-- <div class="clear"></div> -->
      </div>
      <div style="height:1px;"></div>
      <div id="index-jobs">
        <el-tabs v-model="jobsActiveName">
          <el-tab-pane label="IT互联网" name="first">
            <indexJobsCard v-for="i in 9" :key="i"></indexJobsCard>
          </el-tab-pane>
          <el-tab-pane label="重工业" name="second">重工业</el-tab-pane>
          <el-tab-pane label="高新科技" name="third">高新科技</el-tab-pane>
          <el-tab-pane label="培训教育" name="fourth">培训教育</el-tab-pane>
          <el-tab-pane label="服装生产" name="fifth">服装生产</el-tab-pane>
          <el-tab-pane label="印刷" name="sixth">印刷</el-tab-pane>
          <el-tab-pane label="采购贸易" name="seventh">采购贸易</el-tab-pane>
          <el-tab-pane label="娱乐传媒" name="eighth">娱乐传媒</el-tab-pane>
          <el-tab-pane label="医疗健康" name="ninth">医疗健康</el-tab-pane>
        </el-tabs>
      </div>
      <div id="index-banner">
        <el-row :gutter="16">
          <el-col :span="6"><div><img :src="images.banner1" alt="" width="100%"></div></el-col>
          <el-col :span="6"><div><img :src="images.banner2" alt="" width="100%"></div></el-col>
          <el-col :span="6"><div><img :src="images.banner3" alt="" width="100%"></div></el-col>
          <el-col :span="6"><div><img :src="images.banner4" alt="" width="100%"></div></el-col>
        </el-row>
      </div>
      <div id="index-company">
        <el-tabs v-model="jobsActiveName">
          <el-tab-pane label="热门企业" name="first">
            <indexCompanyCard v-for="i in 12" :key="i"></indexCompanyCard>
          </el-tab-pane>
          <el-tab-pane label="行业巨头" name="second">行业巨头</el-tab-pane>
          <el-tab-pane label="国有企业" name="third">国有企业</el-tab-pane>
          <el-tab-pane label="外资企业" name="fourth">外资企业</el-tab-pane>
          <el-tab-pane label="民营企业" name="fifth">民营企业</el-tab-pane>
        </el-tabs>
      </div>
      <div id="index-tools">
        <ul>
          <li><i class="iconfont icon-liuyan"></i></li>
          <li @click="toTop"><i class="iconfont icon-fanhuidingbu"></i></li>
        </ul>
      </div>
    </div>    
  </div>
</template>

<script>
import indexJobsCard from '../components/index-jobsCard'
import indexCompanyCard from '../components/index-companyCard'
export default {
  name: "index",
  components: { indexJobsCard, indexCompanyCard },
  data(){
    return{
      hotSearchJobs:['Java','PHP','C++','web前端','IOS','Android','UI设计师','产品经理'],
      jobsActiveName: 'first',
      images:{
        banner1: require('../assets/images/banner1.png'),
        banner2: require('../assets/images/banner2.png'),
        banner3: require('../assets/images/banner3.png'),
        banner4: require('../assets/images/banner4.png'),
        ad: require('../assets/images/ad.png')
      },
    }
  },
  mounted:function(){
    $(".el-menu--vertical").hover(function(){
      $(".more-jobs-dropDown .el-submenu").show();
      $(".more-jobs-dropDown .more-jobs").hide();
    },function(){
      $(".more-jobs-dropDown .el-submenu").hide();
      $(".more-jobs-dropDown .more-jobs").show();
    })
    $(".more-jobs-dropDown").hover(function(){
      $(".more-jobs-dropDown .el-submenu").show();
      $(".more-jobs-dropDown .more-jobs").hide();
    },function(){
      $(".more-jobs-dropDown .el-submenu").hide();
      $(".more-jobs-dropDown .more-jobs").show();
    })
  },
  methods:{
    toTop(){
      (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo (0,currentScroll - (currentScroll/5));
        }
      })();
    }
  }
};
</script>

<style lang="scss">
  .el-submenu__icon-arrow{
    display: none;
  }
  .el-submenu__title{
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
  }
  .el-tabs__content{
    overflow: visible;
  }
  .btn-outline-info{
    color: #737880 !important;
    font-size: 12px !important;
    border-color: transparent !important;
    background-color: #fff !important;
  }
</style>
<style lang="scss" scoped>
#index {
  height: 100%;
  background: #F7F7F7;
  overflow-x: hidden;
  .container{
    position: relative;
    margin-top: 20px;
    padding: 0;
    width: 1000px;
    #index-navSearch{
      position: relative;
      .el-menu-vertical-demo{
        position: absolute;
        z-index: 999;
      }
      .el-menu{
        border: none;
        .el-submenu [class^=el-icon-]{
          margin: 0;
        }
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 302px;
        min-height: 400px;
      }
      .el-menu--collapse{
        width: 302px;
      }
      .el-submenu{
        .work-type{
          margin-right: 20px;
          color: #393D40;
          font-size: 16px;
          vertical-align: middle;
        }
        .bCrumb{
          display: inline-block;
          span{
            padding: 0 3px;
            color: #737880;
            font-size: 14px;
            vertical-align: middle;
          }
        }
        i{
          line-height: inherit;
          float: right;
        }
      }
      .el-menu--collapse>.el-menu-item span, .el-menu--collapse>.el-submenu>.el-submenu__title span{
        height: auto !important;
        width: auto !important;
        visibility: visible !important;
      }
      .more-jobs-dropDown{
        li{
          z-index: 999;
        }
        .el-submenu{
          display: none;
        }
      }
      .navSearch{
        position: absolute;
        left: 318px;
        width: 682px;
        .input-group{
          border: 1px solid #E3E4E6;
        }
        .form-control{
          border: none;
        }
        .form-control::-webkit-input-placeholder{
          color: #C6C9CC;
          font-size: 14px;
        }
        .hotSearch{
          margin: 11px 0 21px;
          span{
            color: #909399;
            font-size: 14px;
          }
          a{
            margin-right: 20px;
            color: #909399;
            font-size: 14px;
          }
          a:hover{
            color: #00ACC1;
          }
        }
      }
    }
    #index-jobs{
      margin-top: 420px;
      .el-tab-pane{
        font-size: 0;
      }
    }
    #index-banner{
      margin: 40px 0;
    }
    #index-company{
      margin-bottom: 40px;
      .el-tab-pane{
        font-size: 0;
      }
    }
    #index-tools{
      position: fixed;
      bottom: 10%;
      left: 90%;
      ul{
        margin: 0;
        padding: 0;
        background: #fff;
        border: 1px solid #E3E4E6;
      }
      li{
        padding: 0 5px;
        cursor: pointer;
        list-style-type: none;
        i{

        }
      }
    }
  }
}
.el-menu-item{
  display: inline-block;
}
.more-jobs{
  text-align: center;
  display: list-item;
  height: 44px;
  line-height: 44px;
  span{
    color: #00ACC1;
    font-size: 14px;
  }
}
input{
  outline:none;
}
.clear{
  clear: both;
}
</style>
