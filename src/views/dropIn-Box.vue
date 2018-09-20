<template>
  <div id="dropInBox">
    <div class="container">
      <div id="mainDiv">
        <div id="navDiv">
          <div class="navBar">
            <div style="width:36px; text-align:left">
              <button :class="selectStyle1 ? selectClass : noSelectClass" @click="selectCondition='all'">全部</button>
            </div>
            <div style="width:60px; text-align:center">
              <button :class="selectStyle2 ? selectClass : noSelectClass" @click="selectCondition='visited'">被查看</button>
            </div>
            <div style="width:58px; text-align:center">
              <button :class="selectStyle3 ? selectClass : noSelectClass" @click="selectCondition='communicated'">已沟通</button>
            </div>
            <div style="width:46px; text-align:center">
              <button :class="selectStyle4 ? selectClass : noSelectClass" @click="selectCondition='interview'">面试</button>
            </div>
            <div style="width:50px; text-align:right">
              <button :class="selectStyle5 ? selectClass : noSelectClass" @click="selectCondition='unbefitting'">不合适</button>
            </div>
          </div>
        </div>
        <div class="division_long"></div>
        <div v-for="item in recruitment" :key="item.name">
          <div class="mainContentClass">
            <div class="contentDiv1">
              <div class="lineTextDiv omit content_mb16">
                <div class="common omit size_medium colorBlack">{{ item.name }}</div>
                <div class="common size_medium colorOrange">{{ item.salary }}</div>
              </div>
              <div class="lineTextDiv content_mb16">
                <div class="common omit size_small colorGrey">{{ item.address }}</div>
                <span>|</span>
                <div class="common omit size_small colorGrey" style="max-width:80px">{{ item.expRequirement }}</div>
                <span>|</span>
                <div class="common size_small colorGrey">{{ item.eduRequirement }}</div>
              </div>
              <div class="el_buttonDiv">
                <el-button plain size="mini" @click="test" style="outline:none">项目管理证</el-button>
              </div>
            </div>
            <div class="contentDiv2">
              <p class="common omit size_medium">{{ item.company }}</p>
              <div class="lineTextDiv content_mb16">
                <div class="common omit size_small colorGrey" style="max-width:100px">{{ item.companyType }}</div>
                <span>|</span>
                <div class="common size_small colorGrey">{{ item.companyScale}}</div>
              </div>
              <div class="lineTextDiv">
                <div class="common size_small colorWhiteGrey">在招职位</div>
                <div class="common size_small colorPrimary">{{ item.jobAmount }}</div>
              </div>
            </div>
            <div class="noButtonDiv">
              <div class="lineTextDiv div1">
                <img :src="item.HRicon" alt="" width="24px" height="24px" style="margin-right:12px">
                <span class="common size_small colorBlack">{{ item.HRname }}</span>
                <span class="divide">|</span>
                <span class="common size_small colorBlack">{{ item.HRposition}}</span>
                <img :src="iconCommunicate" alt="" width="20px" height="20px" style="margin-right:-2px; margin-bottom:-2px">
              </div>
              <div class="lineTextDiv div2">
                <div class="common size_small colorGrey_mr8">最后更新</div>
                <div class="common size_small colorGrey">{{ item.time }}</div>
              </div>
              <div class="lineTextDiv div3">
                <img :src="item.collected ? isCollected : noCollected" alt="" width="16px" height="16px">
              </div>
            </div>
            <div class="buttonDiv">
              <button class="btnCommunicate" @click="test">沟通</button>
              <button class="btnCollect" @click="item.collected=false" v-if="item.collected">取消收藏</button>
              <button class="btnCollect" @click="item.collected=true" v-else>收藏</button>
            </div>
          </div>
          <div class="division_medium"></div>
        </div>
      </div>
      <div id="asideDiv">
        <p class="common size_medium title" style="line-height:16px">看过的职位</p>
        <div class="asideDivItem">
          <div class="division_long"></div>
          <div v-for="item in viewedItem" :key="item.name">
            <button class="buttonClass" @click="test">
              <div>
                <el-tooltip style="outline:none" placement="bottom" effect="light" :open-delay="1500">
                  <div slot="content" style="font-size:14px">{{ item.name }}</div>
                  <p class="common omit size_big">{{ item.name }}</p>
                </el-tooltip>
                <p class="common size_medium colorOrange">{{ item.salary }}</p>
              </div>
              <p class="common size_mini companyText">{{ item.company }}</p>
            </button>
            <div class="division_short"></div>
          </div>
        </div>
        <p class="common size_medium" style="line-height: 16px; width:max-content; color:#00ACC1; margin-bottom:12px; margin-top:24px">推荐的职位</p>
        <div class="asideDivItem">
          <div class="division_long"></div>
          <div v-for="item in recommended" :key="item.name">
            <button class="buttonClass" @click="test">
              <div>
                <el-tooltip placement="bottom" effect="light" :open-delay="1500">
                  <div slot="content" style="font-size:14px">{{ item.name }}</div>
                  <p class="common omit size_big">{{ item.name }}</p>
                </el-tooltip>
                <p class="common size_medium colorOrange">{{ item.salary }}</p>
              </div>
              <p class="common size_mini companyText">{{ item.company }}</p>
            </button>
            <div class="division_short"></div>
          </div>
        </div>
      </div>
      <div id="floatDiv">
        <ul>
          <li><i class="iconfont icon-liuyan"></i></li>
          <li @click="toTop"><i class="iconfont icon-fanhuidingbu"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropInBox',
  data () {
    return {
      selectCondition: 'all',
      selectClass: 'textButtonBig',
      noSelectClass: 'textButtonSmall',
      isCollected: require('../assets/images/favorite.png'),
      noCollected: require('../assets/images/not_favorite.png'),
      iconCommunicate: require('../assets/images/floatBtn_communicate.png'),
      recruitment: [
        {
          name: '建筑现场管理1',
          salary: '6k-10k',
          company: '新世纪建设集团',
          HRname: '李四',
          HRicon: require('../assets/images/avatar.png'),
          HRposition: '经理',
          address: '云城区',
          expRequirement: '3年以上',
          eduRequirement: '学历不限',
          companyType: '互联网',
          companyScale: '100-200人',
          time: '2018/02/13',
          jobAmount: 13,
          collected: true
        },
        {
          name: '建筑现场管理2',
          salary: '6k-10k',
          company: '新世纪建设集团',
          HRname: '李四',
          HRicon: require('../assets/images/avatar.png'),
          HRposition: '经理',
          address: '云城区',
          expRequirement: '3年以上',
          eduRequirement: '学历不限',
          companyType: '互联网',
          companyScale: '100-200人',
          time: '2018/02/13',
          jobAmount: 13,
          collected: false
        },
        {
          name: '建筑现场管理3',
          salary: '6k-10k',
          company: '新世纪建设集团',
          HRname: '李四',
          HRicon: require('../assets/images/avatar.png'),
          HRposition: '经理',
          address: '云城区',
          expRequirement: '3年以上',
          eduRequirement: '学历不限',
          companyType: '互联网',
          companyScale: '100-200人',
          time: '2018/02/13',
          jobAmount: 13,
          collected: false
        },
        {
          name: '建筑现场管理4',
          salary: '6k-10k',
          company: '新世纪建设集团',
          HRname: '李四',
          HRicon: require('../assets/images/avatar.png'),
          HRposition: '经理',
          address: '云城区',
          expRequirement: '3年以上',
          eduRequirement: '学历不限',
          companyType: '互联网',
          companyScale: '100-200人',
          time: '2018/02/13',
          jobAmount: 13,
          collected: true
        }
      ],
      viewedItem: [
        {name: '建设现场管理1', salary: '6k-10k', company: '新世纪建设集团'},
        {name: '建设现场管理2', salary: '6k-10k', company: '新世纪建设集团'},
        {name: '建设现场管理3', salary: '6k-10k', company: '新世纪建设集团'},
        {name: '建设现场管理4', salary: '6k-10k', company: '新世纪建设集团'}
      ],
      recommended: [
        {name: '建设现场管理1', salary: '6k-10k', company: '新世纪建设集团'},
        {name: '建设现场管理2', salary: '6k-10k', company: '新世纪建设集团'},
        {name: '建设现场管理3', salary: '6k-10k', company: '新世纪建设集团'},
        {name: '建设现场管理4', salary: '6k-10k', company: '新世纪建设集团'}
      ]
    }
  },
  methods: {
    test: function () {
      alert('test')
    },
    setCondition: function (message) {
      this.selectCondition = message
    },
    toTop(){
      (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo (0,currentScroll - (currentScroll/5));
        }
      })();
    }
  },
  computed: {
    selectStyle1: function () {
      return (this.selectCondition == 'all')//eslint-disable-line
    },
    selectStyle2: function () {
      return (this.selectCondition == 'visited')//eslint-disable-line
    },
    selectStyle3: function () {
      return (this.selectCondition == 'communicated')//eslint-disable-line
    },
    selectStyle4: function () {
      return (this.selectCondition == 'interview')//eslint-disable-line
    },
    selectStyle5: function () {
      return (this.selectCondition == 'unbefitting')//eslint-disable-line
    }
  }
}
</script>

<style lang="scss" scoped>
#dropInBox{
  box-sizing: content-box;
  height: 100%;
  min-height: 820px;
  background:#f2f2f2;
  overflow-x: hidden;
  .container{
    position: relative;
    width: 1000px;
    margin: 20px auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    #mainDiv{
      width: 776px;
      height: min-content;
      margin-right: 24px;
      background-color: white;
      #navDiv{
        width:100%;
        height:28px;
        background-color:#F2F2F2;
        .navBar{
          display:flex;
          align-items:center;
          width:250px;
          height:16px;
          margin-bottom:12px;
        }
      }
      .mainContentClass{
        padding: 32px 32px 26px 32px;
        display: flex;
        align-items: flex-start;
        position:relative;
        .contentDiv1{
          width:280px;
          margin-right:36px;
          .content_mb16{
            .colorBlack{
              margin-right:16px;
            }
            span{
              color:rgba(227,228,230,1);
              margin:0px 8px ;
            }
          }
          .el_buttonDiv{
            text-align: left;
          }
        }
        .contentDiv2{
          width:210px;
          margin-right:36px;
          p{
            width:200px;
            text-align:left;
            margin-bottom:16px;
          }
          span{
            color:rgba(227,228,230,1);
            margin:0px 8px ;
          }
          .colorWhiteGrey{
            margin-right:8px;
          }
        }
        .noButtonDiv{
          width:150px;
          margin-top:-4px;
          .lineTextDiv{
            justify-content:flex-end;
            height:24px;
          }
          .div1{
            margin-bottom:12px;
            span{
              margin-right:8px;
            }
            .divide{
              color:rgba(227,228,230,1);
            }
          }
          .div2{
            margin-bottom:16px;
            .colorGrey_mr8{
              color:#737880;
              margin-right:8px;
            }
          }
          .div3{
            height:16px;
          }
        }
        .buttonDiv{
          display: none;
          width:150px;
          top:32px;
          right:32px;
          text-align: right;
          position: absolute;
          .btnCommunicate{
            width:88px;
            height:36px;
            border:none;
            background-color:#00ACC1;
            color:#FFFFFF;
            text-align:center;
            font-size:14px;
            font-family:PingFangSC-Regular;
            margin-bottom: 22px;
            outline: none;
            cursor: pointer;
          }
          .btnCollect{
            width:88px;
            height:36px;
            border-color:#C6C9CC;
            border-style:solid;
            border-width:1px;
            background-color:#FFFFFF;
            color:#393D40;
            text-align:center;
            font-size:14px;
            font-family:PingFangSC-Regular;
            outline: none;
            cursor: pointer;
          }
          .btnCommunicate:hover{
            background-color:#26BFC6;
          }
          .btnCollect:hover{
            border-color:#26BFC6;
            color:#00ACC1;
          }
          .btnCommunicate:active{
            background-color:rgb(34, 170, 177);
          }
          .btnCollect:active{
            border-color:rgb(34, 170, 177);
            color:rgb(18, 138, 145);
          }
        }
      }
      .mainContentClass:hover{
        background-color: rgb(242,251,252);
        .noButtonDiv{
          display: none;
        }
        .buttonDiv{
          display: inline;
        }
      }
    }
    #asideDiv{
      .title{
        width:max-content;
        color:#00ACC1;
        margin-bottom:12px;
      }
      .asideDivItem{
        width: 200px;
        height: min-content;
        background-color: white;
        .buttonClass{
          width: 100%;
          border: none;
          background-color: white;
          padding: 12px 16px 16px 16px;
          outline:none;
          cursor: pointer;
          div{
            height:max-content;
            display: flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:4px;
            .el-tooltip{
                box-sizing: content-box;
                outline:none;
            }
          }
          .companyText{
            color:#909399;
            text-align:left;
            margin-left:5px;
          }
        }
        .buttonClass:hover{
          background-color: rgb(242,251,252);
        }
        .buttonClass:active{
          background-color: rgb(237,246,252);
        }
      }
    }
    #floatDiv{
      position: fixed;
      margin-left: 1025px;
      bottom: 10%;
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
.content_mb16{
  margin-bottom:16px;
}
.colorPrimary{
  color:#00ACC1;
}
.colorBlack{
  color:#393D40;
}
.colorWhiteGrey{
  color:#909399;
}
.colorGrey{
  color:#737880;
}
.colorOrange{
  color:#FFA726;
}
.division_long{
  width:100%;
  height:1px;
  background-color:#00ACC1;
}
.division_medium{
  width:712px;
  height:1px;
  background-color:#E3E4E6;
  margin:0 auto;
}
.division_short{
  width:167px;
  height:1px;
  background-color:#E3E4E6;
  margin:0 auto;
}
.common{
  margin-bottom: 0px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
}
.textButtonBig{
  font-family: PingFangSC-Regular;
  font-weight: 400;
  width: max-content;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
  padding: 0px;
  background-color: #f2f2f2;
  color:#00ACC1;
  border: none;
  outline: none;
  cursor: pointer;
}
.textButtonSmall{
  font-family: PingFangSC-Regular;
  font-weight: 400;
  width: max-content;
  height: 14px;
  font-size: 14px;
  line-height: 14px;
  padding: 0px;
  background-color: #f2f2f2;
  color:#737880;
  border: none;
  outline: none;
  cursor: pointer;
}
.textButtonSmall:hover{
  color:#00ACC1;
}
.textButtonSmall:active{
  color:rgb(18, 138, 145);
}
.lineTextDiv{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.omit{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.size_big{
  width: 100px;
  font-size: 16px;
}
.size_medium{
  font-size: 16px;
}
.size_small{
  font-size: 14px;
}
.size_mini{
  font-size: 12px;
}
</style>
